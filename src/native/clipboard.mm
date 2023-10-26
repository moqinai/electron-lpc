/*
 * @Author: lipengcheng
 * @Date: 2023-10-27 00:16:38
 * @LastEditTime: 2023-10-27 00:21:25
 * @Description: 功能：用 Mac 原生 API（实际上是 Cocoa 提供的 API）获取剪切板内的文件路径
 */
//src\native\clipboard.mm
#import <Foundation/Foundation.h>
#import <Cocoa/Cocoa.h>
#include "clipboard.h"

std::vector<std::string> ReadFilePaths() {
    NSPasteboard *pasteboard = [NSPasteboard generalPasteboard];
    NSArray<NSURL *> *urls = [pasteboard readObjectsForClasses:@[NSURL.class] options:@{
            NSPasteboardURLReadingFileURLsOnlyKey: @YES,
    }];
    if (!urls) {
        return {};
    }
    auto result = std::vector<std::string>();
    result.reserve(urls.count);
    for (NSURL *url in urls) {
        result.emplace_back([url.path UTF8String]);
    }
    return result;
}
