export default function debounce(fn: Function, delay: number) {
  let timer: NodeJS.Timeout | undefined;

  return function(this: any) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

// ref(ES2015 version): https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=KYDwDg9gTgLgBAE2AMwIYFcA29noHYDGMAlhHosAEYT4HAAUyeAXHAGK0lkA0FmqAT1Z50AW0rAoASjgBvAFBw4mYPBKjJrAHIQkAKQDKAOgAqxDTXgAfOPiTJieYAgDc8xXCir0UcrkJcePQwABbEAM6sqHgCMgpKSuqScABkKXAEKqhQZhboMMHmklJuCXBJUHAAvHDhqrnAlvT0MlUAfHBMRqhgYJgCwWHhvNkA5mLAeDDhUrxI_LGlcAC-bsvyQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ces2015%2Ctypescript%2Cenv&prettier=false&targets=&version=7.11.6&externalPlugins=
