/*
 * @Author: lipengcheng
 * @Date: 2023-10-27 00:12:47
 * @LastEditTime: 2023-10-27 00:14:55
 * @Description: 功能：ReadFilePathsJs 方法执行时调用方会传入一个 CallbackInfo 类型的参数，它是一个由 Node.js 传入的对象，该对象包含 JavaScript 调用此方法时的输入参数，可以通过这个对象的 Env 方法获取 JavaScript 运行时环境对象。
 */

#include <napi.h>
#include <tuple>
#include "clipboard.h"

Napi::Array ReadFilePathsJs(const Napi::CallbackInfo &info)
{
    auto env = info.Env();
    const auto file_paths = ReadFilePaths();
    auto result = Napi::Array::New(env, file_paths.size());
    for (size_t i = 0; i != file_paths.size(); ++i)
    {
        result.Set(i, file_paths[i]);
    }
    return result;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("readFilePaths", Napi::Function::New(env, ReadFilePathsJs));
    return exports;
}
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)

/* 
  NODE_API_MODULE 这个宏方法定义此原生模块的入口函数，一旦 Node.js 加载该模块时，将执行 Init 方法，
  NODE_GYP_MODULE_NAME 宏展开后为编译配置文件 binding.gyp 中的 target_name。
 */