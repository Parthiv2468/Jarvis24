from playsound import playsound
import eel
from engine.config import ASSISTANT_NAME

# Playing assistant sound function

@eel.expose
def playAssistantSound():
  music_dir ="www\\assets\\audio\\start_sound.mp3"
  playsound(music_dir)


  def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()
    
    if query!="":
      speak("Opening "+query)
      os.system('start'+query)
    else:
      speak("not found")