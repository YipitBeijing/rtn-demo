package com.rtnturbomoduleshelper;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtnturbomoduleshelper.RtnTurboModulesHelperSpec;

public class RtnTurboModulesHelperModule extends RtnTurboModulesHelperSpec {

    public static String NAME = "RtnTurboModulesHelper";

    RtnTurboModulesHelperModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void transmitString(String str, Promise promise) {
        promise.resolve(str);
    }

    @Override
    public void transmitJSON(WritableArray data, Promise promise) {
        promise.resolve(data);
    }
}