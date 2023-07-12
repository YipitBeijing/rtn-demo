#import "RtnTurboModulesHelperSpec.h"
#import "RtnTurboModulesHelper.h"

@implementation RtnTurboModulesHelper

RCT_EXPORT_MODULE(RtnTurboModulesHelper)

RCT_REMAP_METHOD(transmitString, str:(NSString *)str
                withResolver:(RCTPromiseResolveBlock) resolve
                withRejecter:(RCTPromiseRejectBlock) reject)
{
    NSString *result = [NSString stringWithFormat:@"%@",str];
    resolve(result);
}

RCT_REMAP_METHOD(transmitJSON, data:(NSArray *)data 
                withResolver:(RCTPromiseResolveBlock) resolve
                withRejecter:(RCTPromiseRejectBlock) reject)
{
  NSArray *result = [[NSArray alloc] initWithArray:data];
  resolve(result);
}


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeHelperSpecJSI>(params);
}

@end