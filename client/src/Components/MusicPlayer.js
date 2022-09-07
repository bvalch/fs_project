
import { Howl, Howler } from 'howler';
import './style/NavBar.css';



const MusicPlayer = () => {

    const sound = new Howl({
        src: ['Dinobeat.mp3'],
        html5: true,
        loop: true,
    });

    sessionStorage.setItem('isMusicOn', false);

    return (
        <>

            <button className='button-music'>
                < img className='music' src={require('./style/component_images/sound.png')} alt="nothing here" onClick={() => {
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

export default MusicPlayer;


