[Fix a pod install error "undefined method 'exist' for File:Class" React Native](https://dev.to/retyui/fix-a-pod-install-error-undefined-method-exist-for-fileclass-react-native-24ke)

Make use of a Ruby version manager
1.1) In the root of your react native project, create a .ruby-version and Gemfile

.ruby-version:

```
2.7.6
```

Gemfile:

```
source 'https://rubygems.org'
# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby File.read(File.join(__dir__, '.ruby-version')).strip

gem 'cocoapods', '~> 1.11', '>= 1.11.3'
```

1.2) Install the Ruby version manager

```bash
brew install rbenv ruby-build # install ruby ver. manager
rbenv init                    # load rbenv in your shell
# ^^^follow instructions after re-run terminal!!!
rbenv install 2.7.6           # install required Ruby version
```

1.3) Preinstalling ruby gems

```bash
cd your/rn_project/folder
rbenv local     # switch to 2.7.6 ruby version
bundler install # install gem deps
```

Finally, execute the following command to install pods when necessary

```bash
bundler exec pod install --project-directory=ios
```

Temporary use `bundler exec pod install --project-directory=ios` instead of `npx pod-install` in bin.postInstall
