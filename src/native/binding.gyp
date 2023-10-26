#include_dirs 配置 node-addon-api 项目提供的 C++ 头文件所在路径，defines、cflags_cc!和 cflags!起到禁用 C++ 异常的作用（注意，如果开发者选择禁用 C++ 异常，那么 node-addon-api 框架将不再为开发者处理异常，开发者就需要自己检查异常了），sources 指向这个原生模块的入口文件，target_name 为原生模块的名称。conditions 配置节的内容我们稍后再解释。
{
  "targets": [
    {
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
      "target_name": "addon",
      "include_dirs": ["<!(node -p \"require('node-addon-api').include_dir\")"],
      "sources": ["export.cc"],
      "conditions": [
        [
          'OS=="mac"',
          {
            "sources": ["clipboard.mm"],
            "link_settings": {
              "libraries": ["-framework Cocoa", "-framework CoreFoundation"]
            },
            "xcode_settings": {
              "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
              "CLANG_ENABLE_OBJC_ARC": "YES",
              "OTHER_CFLAGS": ["-ObjC++", "-std=c++17"]
            }
          }
        ],
        [
          'OS=="win"',
          {
            "sources": ["clipboard.cc"],
            "libraries": ["Shlwapi.lib", "Shcore.lib"],
            "msvs_settings": {
              "VCCLCompilerTool": {
                "AdditionalOptions": ["/std:c++17"]
              }
            }
          }
        ]
      ]
    }
  ]
}
