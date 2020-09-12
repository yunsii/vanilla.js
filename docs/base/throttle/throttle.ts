export default function throttle(fn: Function, delay: number) {
  let disabled = false;
  return function(this: any) {
    if (disabled) {
      return;
    } else {
      disabled = true;
    }

    setTimeout(() => {
      fn.apply(this, arguments);
      disabled = false;
    }, delay);
  };
}

// ref(ES2015 version): https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=KYDwDg9gTgLgBAE2AMwIYFcA29noHYDGMAlhHnDABZQQwybAAUyeAXHAGL5Gl4A0iYJlQBPdnnQBbAEbAoASjgBvAFBw4DeAmIBnVNIYI4AXjhpMO4AG41cKMBjoo5XIRJlGVXe1R4Ri1XV1YmQ4Rm09A2AEANsguwcnPBt4gF84IUtlOKCI_UMTCih0axzUlRzLGAAVYklgCHQYRkZFYwA-bPj1FgA6VDAwTBFPSl0BVCgAcylgPBgdeRTuvKijU3NLZfVUgSRhf2XUm3KgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ces2015%2Ctypescript%2Cenv&prettier=false&targets=&version=7.11.6&externalPlugins=
