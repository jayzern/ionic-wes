# wes_conference_app

Forked from https://github.com/ionic-team/ionic-conference-app

## Demo

<p float="left">
  <img src="./resources/intro.jpg" width="250" />
  <img src="./resources/menu.jpg" width="250" /> 
  <img src="./resources/schedules.jpg" width="250" /> 
</p>

<p float="left">
  <img src="./resources/q&a.jpg" width="250" />
  <img src="./resources/about.jpg" width="250" /> 
  <img src="./resources/map.jpg" width="250" /> 
</p>

<p float="left">
  <img src="./resources/about.jpg" width="250" />
  <img src="./resources/teams.jpg" width="250" /> 
</p>


## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## File Structure of App

```
ionic-conference-app/
├-- .github/                            * GitHub files
│   ├── CONTRIBUTING.md                 * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md               * Template used to populate issues in this repo
|
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |
|    |-- assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                          * Contains all of our pages
│    │    ├── about/                     * About tab page
│    │    │    ├── about.html            * AboutPage template
│    │    │    └── about.ts              * AboutPage code
│    │    │    └── about.scss            * AboutPage stylesheet
│    │    │
│    │    ├── account/                   * Account page
│    │    │    ├── account.html          * AccountPage template
│    │    │    └── account.ts            * AccountPage code
│    │    │    └── account.scss          * AccountPage stylesheet
│    │    │
│    │    │── login/                     * Login page
│    │    │    ├── login.html            * LoginPage template
│    │    │    └── login.ts              * LoginPage code
│    │    │    └── login.scss            * LoginPage stylesheet
│    │    │
│    │    │── map/                       * Map tab page
│    │    │    ├── map.html              * MapPage template
│    │    │    └── map.ts                * MapPage code
│    │    │    └── map.scss              * MapPage stylesheet
│    │    │
│    │    │── schedule/                  * Schedule tab page
│    │    │    ├── schedule.html         * SchedulePage template
│    │    │    └── schedule.ts           * SchedulePage code
│    │    │    └── schedule.scss         * SchedulePage stylesheet
│    │    │
│    │    │── schedule-filter/            * Schedule Filter page
│    │    │    ├── schedule-filter.html   * ScheduleFilterPage template
│    │    │    └── schedule-filter.ts     * ScheduleFilterPage code
│    │    │    └── schedule-filter.scss   * ScheduleFilterPage stylesheet
│    │    │
│    │    │── session-detail/            * Session Detail page
│    │    │    ├── session-detail.html   * SessionDetailPage template
│    │    │    └── session-detail.ts     * SessionDetailPage code
│    │    │
│    │    │── signup/                    * Signup page
│    │    │    ├── signup.html           * SignupPage template
│    │    │    └── signup.ts             * SignupPage code
│    │    │
│    │    │── speaker-detail/            * Speaker Detail page
│    │    │    ├── speaker-detail.html   * SpeakerDetailPage template
│    │    │    └── speaker-detail.ts     * SpeakerDetailPage code
│    │    │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│    │    │
│    │    │── speaker-list/              * Speakers tab page
│    │    │    ├── speaker-list.html     * SpeakerListPage template
│    │    │    └── speaker-list.ts       * SpeakerListPage code
│    │    │    └── speaker-list.scss     * SpeakerListPage stylesheet
|    |    |
│    │    │── support/                   * Support page
│    │    │    ├── support.html          * SupportPage template
│    │    │    └── support.ts            * SupportPage code
│    │    │    └── support.scss          * SupportPage stylesheet
│    │    │
│    │    │── tabs/                      * Tabs page
│    │    │    ├── tabs.html             * TabsPage template
│    │    │    └── tabs.ts               * TabsPage code
│    │    │
│    │    └── tutorial/                  * Tutorial Intro page
│    │         ├── tutorial.html         * TutorialPage template
│    │         └── tutorial.ts           * TutorialPage code
│    │         └── tutorial.scss         * TutorialPage stylesheet
|    |
│    ├── providers/                      * Contains all Injectables
│    │     ├── conference-data.ts        * ConferenceData code
│    │     └── user-data.ts              * UserData code
│    ├── theme/                          * App theme files
|    |     ├── variables.scss            * App Shared Sass Variables
|    |
|    |-- index.html
|
|-- www/
|    ├── assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    └── build/
|    └── index.html
|
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── LICENSE                             * Apache License
├── README.md                           * This file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
├── tslint.json                         * Defines the rules for the TypeScript linter
```
