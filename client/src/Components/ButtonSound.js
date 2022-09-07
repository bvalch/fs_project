import { Howl, Howler } from 'howler';

const ButtonSound = () => {

    const buttonSoundList = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3" ]

    const sound = new Howl({
        src: [buttonSoundList[Math.floor(Math.random() * 5)]],
        html5: true,
    });

    sound.play();


}

export default ButtonSound;
