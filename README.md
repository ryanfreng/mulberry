# Support

- [Documentation](https://github.com/toura/mulberry/wiki)
- [Google Group](https://groups.google.com/forum/#!forum/toura-mulberry)
- #touramulberry on irc.freenode.net: A live chat room with Mulberry users and
  developers. Use your own IRC client or [use Freenode's webchat](http://webchat.freenode.net/)


# Installation

Windows, Ubuntu Linux, and OSX all have different installation methods. Please see the
platform-specific README.md located in the `install/osx`, `install/windows`, etc. directories.


# Post-Installation Setup

Mulberry currently supports the following mobile platforms:

- iOS4 and above on iPhone and iPad
- Android 2.2 and above on Phone only

Mulberry apps have been shown to run on WebOS, although not bug-free.

Mulberry apps do not support Windows Mobile or BlackBerry in any version.

Mulberry development tools are supported on the following platforms:

- OSX Snow Leopard and Lion
- Windows 7 64-bit via CYGWIN

Mulberry development is not supported on Linux, but it might work. Please let
us know at mulberry@toura.com if you can get it working on a particular Linux distro.


## iOS Development

To build and run apps on iOS Simulator, you must:

- Own an Intel Mac running OSX Snow Leopard or Lion

- Download Xcode 4.2 or greater from the
   [Mac App Store](http://itunes.apple.com/us/app/xcode/id448457090?mt=12)


In order to submit your apps to the Apple iOS App Store, you must
[sign up with Apple's iOS Developer Program](http://developer.apple.com/programs/ios/)


## Android Development

To build and run apps on Android Simulator, you must:

- Install Java JDK 1.6 or above. This should install the java compiler (javac -version should return 1.6.x)

- You may have to install Apache ant (`which ant`). We develop with ant 1.8.x (ant -version)
   http://ant.apache.org

- Download [Android SDK package](http://developer.android.com/sdk/index.html) for your platform

- On OSX, extract it to `/Developer/SDKs/android-sdk-mac_x86/`. If you do not
   place it in this directory, Mulberry _should_ detect the location of it, but
   this is the preferred location.

- Edit your shell's loading files (`.bashrc` or `.bash\_profile` for bash and
   `.zshrc` for zsh) and add a line similar to:

	  `export PATH=$PATH:/Developer/SDKs/android-sdk-mac_x86/tools:/Developer/SDKs/android-sdk-mac_x86/platform-tools`

- Open a new teminal and run the SDK manager:

	  `android`

- Click "Available packages"

- Expand "Android Repository"

  You should install:

  - "Android SDK Tools" (latest revision)
  - "Android SDK Platform-tools" (latest revision)
  - SDK Platform Android 2.2, 2.3.x, 2.n (up to latest revision)
  - SDK Platform Android 3.x

  Expand "Third party Add-ons", then install:

  - Google APIs 8, 9 (up to latest revision)

  Be careful, as some tools require certain revisions, so if you see
  "Skipping 'X'; it depends on 'Y'" you'll have to go back and choose X again.

  Keep doing this until you've installed everything.

- You do not need, but may choose, to install the Samples and Documentation.
It's pretty useless and just takes up space.


### Creating an Android Virtual Device

Run the SDK manager by running `android` on the command line.

- On the "Virtual Devices" section click the "New..." button

- Name the device

- Select the Google APIs - API Level 8 (to test 2.2) as the target

- Make the SD card size 64 MB

- Click "Create AVD"

Now you can run the device by running `emulator @your-device-name -partition-size 128`

To rotate the device hit 7 or 9 on your numeric keypad. If you don't have one:
CTRL-F12 to rotate to landscape, CTRL-F11 to rotate back.


### Installing to your Android Virtual Device

Start the emulator, then type:

	  adb install -r /path/to/your.apk


# Running the tests


Note that if you've been following along, you have not installed the libraries
to do testing. Run `bundle install` to install the test/development libraries necessary
for testing.

To run the tests, run `rake` from the root of the repository.

You can also run individual suites:

    rake                  # run all of the tests & jshint. Alised of rake ci
    rake spec			  # run the ruby unit tests
    rake integration      # run the javascript integration tests
    rake evergreen:run    # run the javascript unit tests
    rake evergreen:serve  # serve the javascript tests for manual testing
    rake jshint           # run jshint on the js code and js tests

## Installing chromedriver

You will need chromedriver in order to run the JavaScript tests. You can
[download chromedriver](http://code.google.com/p/chromium/downloads/list)
if you do not already have it installed; make sure you install it somewhere in your $PATH.

This is automatically installed for you by the OSX installer, other platforms
will need to install it by hand.
