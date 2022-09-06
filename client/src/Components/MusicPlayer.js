import { Howl, Howler } from 'howler';


const MusicPlayer = () => {

    const sound = new Howl({
        src: ['Dinobeat.mp3'],
        html5: true,
        loop: true,
    });

    sessionStorage.setItem('isMusicOn', false);

    return (
        <>
            <button className='music'>
                < img src="/sound.png" alt="image" onClick={() => {
                    console.log(sessionStorage.getItem('isMusicOn'))

                    if (sessionStorage.getItem('isMusicOn') === "false") {
                        sessionStorage.setItem('isMusicOn', true);
                        sound.play();
                    }
                    else {
                        sessionStorage.setItem('isMusicOn', false)
                        sound.stop();
                    }
                }
                }
                />
            </button>
        </>
    )

}

export default MusicPlayer


