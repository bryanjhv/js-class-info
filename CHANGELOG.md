# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com) and this
project adheres to [Semantic Versioning](http://semver.org).


## [1.0.2] - 2016-11-26

### Added

- Support parent class sniffing.

### Changed

- Updated `README` to include a better example and list returned values.
- Updated `README` to include warnings about using the parent class.


## [1.0.1] - 2016-11-26

### Added

- Check if `ctor` argument is a `class` or `function`.
- Tests to verify `ctor` type.

### Changed

- Replace `typeof` checking for a more robust `is-function`.


## 1.0.0 - 2016-11-26

### Added

- Initial method to inspect a constructor.
- Tests to back the method.


[1.0.1]: https://github.com/bryanjhv/js-class-info/compare/1.0.0...1.0.1
[1.0.2]: https://github.com/bryanjhv/js-class-info/compare/1.0.1...1.0.2
