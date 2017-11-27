#!/bin/bash
ionic cordova build --release android
APP="socialRunner"
cd ./platforms/android/build/outputs/apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -storetype jceks -storepass keystore -keystore ../../../../../key.keystore android-release-unsigned.apk $APP 
rm $APP.apk
zipalign -v 4 android-release-unsigned.apk $APP.apk
open .