# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Released]

## [2.1.0] - 2023/02/25

### Added

- Changelog and updated Readme
- Remove Bootstrap-vue package as it is unused.
- Bootstrap-vue wrapper is not being maintained quickly enough. It is [not fully compatible with Vue3](https://bootstrap-vue.org/vue3) and is not keeping up-to-date with the latest [Bootstrap](https://getbootstrap.com/) development cycles. As such, it is better to use Bootstrap directly without a wrapper. A wrapper, in this context, is component that wraps around another component, often for convience. The convience vs. maintaining updates is a trade-off. Sometimes the wrapper is unofficial, maintained by an unknown individual and becomes abandoned. This is also a security concern, depending on context. It is sometimes better to use the package directly without a wrapper; depending on context.
- Update favicon.ico using [FontAwesome icon - person with a tie](https://fontawesome.com/icons/user-tie?s=solid&f=classic)
- Update title of website
- Add ESLint, Prettier and TypeScript to project
- Create classes variable that contains arrays of class names such that the code looks cleaner.
- Load Google Fonts using a Vite plugin instead of `<link>`.

### Fixed

- Video animation in navigation on mobile.
- scrollspy is fixed in desktop mode.

### Known Bugs

- The arrow's initial state and on first click does not work properly. The arrows are copied from old index.php. They should be upgraded to a font-awesome-vue method.

## [2.0.0] - 2023/02/24

### Added

- Migrated StartBootstrap based website from index.php to a VUE3 Framework, based on VUE2 template.
- Added Video Background
- Created Docker Container for development rather than switching node versions on local machine depending on project.

### Known bugs

- Video animation in navigation is disabled on mobile until a solution is found
- The arrow's initial state and on first click does not work properly. The arrows are copied from old index.php. They should be upgraded to a font-awesome-vue method.
- scrollspy is broken on desktop mode but works on mobile likely indirectly due to the video-background container.

## [1.0.0] - 2019

### Added

- Create and deploy resume website using StatBootstrap Resume now that I am graduating.
- Add PHP for HTML code injection (similar to a component).
- Use a shell script to auto-generate html from resume document to inject into appropriate sections like "Expereince". Resume is being tweaked continuously so it saves time copying and pasting (which is more error prone).
- Change colour scheme to turquoise as orange is ugly (in my humble opinion).
- Subheadings collapse to make the website look cleaner and less cluttered (more white space). If someone is really interested in the details, they can expand the sections.
- Change profile picture from circle to rectangle to match the profile picture and make it look a little more modern. This might be changed back with a different profile picture.

### Known bugs

- The arrow's initial state and on first click does not work properly. Uses CSS to capture the state of bootstrap "collapse" class. There is likely a better way to do this in a VUE or REACT Framework.
