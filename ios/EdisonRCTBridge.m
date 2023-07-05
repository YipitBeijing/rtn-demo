#import "EdisonRCTBridge.h"

@implementation EdisonRCTBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(transmitString: (NSString *)text withResolver:(RCTPromiseResolveBlock) resolve
                withRejecter:(RCTPromiseRejectBlock) reject)
{
  NSString *result = [NSString stringWithFormat:@"%@",text];
  resolve(result);
}

@end