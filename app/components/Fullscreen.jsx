import { useEffect, useContext } from 'react';
import StoreContext from '../context/Store';
import { Expand } from 'lucide-react';

const FullScreenToggle = ({ targetRef }) => {
  const { state, actions } = useContext(StoreContext);

  const toggleFullScreen = () => {
    if (!state.isFullScreen) {
      if (targetRef.current.requestFullscreen) {
        targetRef.current.requestFullscreen();
      } else if (targetRef.current.mozRequestFullScreen) { // Firefox
        targetRef.current.mozRequestFullScreen();
      } else if (targetRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        targetRef.current.webkitRequestFullscreen();
      } else if (targetRef.current.msRequestFullscreen) { // IE/Edge
        targetRef.current.msRequestFullscreen();
      }
      actions.setIsFullScreen(true);
    } else {
      exitFullScreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    actions.setIsFullScreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      actions.setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [state.isFullScreen]);

  return (
    <button onClick={toggleFullScreen}>
    <div className="flex flex-col items-center justify-center w-16 h-16  cursor-pointer border border-[#1f1f1f] hover:border-slate-600 shadow hover:bg-white/60 group">
        <Expand className='h-10 w-10 text-[#1f1f1f] cursor-pointer group-hover:text-slate-600' strokeWidth={1}  />
        <p className="text-xs uppercase text-[#1f1f1f] tracking-tight group-hover:text-slate-600 leading-[0.9]">Full Screen</p>
        </div>
    </button>
  );
};

export default FullScreenToggle;
