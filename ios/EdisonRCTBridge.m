#import "EdisonRCTBridge.h"

@implementation EdisonRCTBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(transmitString: (NSString *)text withResolver:(RCTPromiseResolveBlock) resolve
                withRejecter:(RCTPromiseRejectBlock) reject)
{
  NSString *result = [NSString stringWithFormat:@"%@",text];
  resolve(result);
}


RCT_EXPORT_METHOD(transmitJSON: (NSArray *)data withResolver:(RCTPromiseResolveBlock) resolve
                withRejecter:(RCTPromiseRejectBlock) reject)
{
  NSArray *result = [[NSArray alloc] initWithArray:data];
  resolve(result);
}


@end