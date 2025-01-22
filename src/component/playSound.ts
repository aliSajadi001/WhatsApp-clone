import useSound from "use-sound";

export let playSounds = () => {
  let [play1] = useSound("public/sound/Bell.mp3");
  let [play2] = useSound("public/sound/Discovery (1).mp3");
  let [play3] = useSound("public/sound/Dual Keys.mp3");
  let [play4] = useSound("public/sound/Flow.mp3");
  let [play5] = useSound("public/sound/Lift.mp3");
  let [play6] = useSound("public/sound/Pocket.mp3");
  let [play7] = useSound("public/sound/Solo.mp3");
  let [play8] = useSound("public/sound/Two-Tone.mp3");
  let [play9] = useSound("public/sound/Xylophone.mp3");
  let playSound = (sound: string) => {
    switch (sound) {
      case "Bell":
        play1();
        break;
      case "Discovery":
        play2();
        break;
      case "Dual":
        play3();
        break;
      case "Flow":
        play4();
        break;
      case "Lift":
        play5();
        break;
      case "Pocket":
        play6();
        break;
      case "Solo":
        play7();
        break;
      case "Two-Tone":
        play8();
        break;
      case "Xylophone":
        play9();
        break;
      default:
    }
  };
  return { playSound };
};
