class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.audios[1] = "https://edge.mixlr.com/channel/jalns";
        this.audios[2] = "http://edge.mixlr.com/channel/kijwr";
        this.audios[3] = "http://panoramaa.hopto.org:8000/;stream.nsv";
        this.audios[4] = "http://curiosity.shoutca.st:6035/;";
        this.audios[5] = "https://media-ice.musicradio.com/CapitalMP3";
        this.audios[6] = "https://media-ice.musicradio.com/HeartLondonMP3";
        this.audios[7] = "http://ruby.streamguys.com:8120/sar-qatar-2";
        this.audios[8] = "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service";
        this.audios[9] = "http://noasrv.caster.fm:10136/stream";
        this.audios[10] = "https://n02.radiojar.com/0tpy1h0kxtzuv";





    
        this.names = [];
        this.names[0] = "أغاني كردية";
        this.names[1] = "راديو أصالة";
        this.names[2] = "راديو سام اف ام";
        this.names[3] = "يمن اف ام";
        this.names[4] = "راديو روتانا";
        this.names[5] = "العاصمة لندن ";
        this.names[6] = "قلب لندن";
        this.names[7] = "اذاعة صوت الخليج";
        this.names[8] = "BBC World Service";
        this.names[9] = "اذاعة الغد المشرق";
        this.names[10] = "أذاعة المملكة القران الكريم";





        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();

window.addEventListener('offline',()=>{
    alert("فقدت الاتصال بالانترنت")
});
window.addEventListener('online',()=>{
    alert("تم اعادة الاتصال بالانترنت")
});