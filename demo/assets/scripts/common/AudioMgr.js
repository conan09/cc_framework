/**
 * 声音管理
 */

;window.AudioMgr = window.AudioMgr || {
    bgmPath : "sound/bgm/",
    sfxPath : "sound/sfx/",
    // 背景音乐、音效开关
    music_on : true,
    sfx_on : true,
    //
    current_music : null,
    prev_music : null,
};

//////////////////////////////////////////////////////////////////////

AudioMgr.PlayMusic = function(musicType, isLoop/* isLoop = ture*/){
    if(!this.music_on ||(current_music === musicType)){
        return;
    }
    if(!isLoop){
        isLoop = true;
    }
    if(isLoop){
        this.prev_music = this.current_music;
    }
    Utils.LoadRes(bgmPath+musicType, cc.AudioClip, (err, ret)=>{
        AudioMgr.StopMusic();
        cc.audioEngine.playMusic(ret, isLoop);
        this.current_music = musicType;
    })
}

AudioMgr.StopMusic = function(){
    if(this.current_music){
        cc.audioEngine.stopMusic();
        this.current_music = null;
    }
}

AudioMgr.PauseMusic = function(){
    if(this.current_music){
        cc.audioEngine.pauseMusic();
    }
}

AudioMgr.ResumeMusic = function(){
    if(this.current_music){
        cc.audioEngine.resumeMusic();
    }
}

AudioMgr.IsMusicPlaying = function(){
    return AudioMgr.music_on;
}

AudioMgr.MusicOn = function(flag){
    if(true == flag){
        AudioMgr.music_on = flag;
        if(this.prev_music){
            AudioMgr.PlayMusic(this.prev_music);
        }
    }else{
        AudioMgr.StopMusic();
        AudioMgr.music_on = flag;
    }
}

//////////////////////////////////////////////////////////////////////

AudioMgr.PlaySound = function(soundName, isLoop/*false*/){
    if(!sfx_on){
        return;
    }
    if(isLoop == "undefined" || isLoop == null){
        isLoop = false;
    }
    Utils.LoadRes(this.sfxPath + soundName, cc.AudioClip, (err, ret)=>{
        var audioID = cc.audioEngine.playEffect(ret, isloop);
        return audioID;
    });
}

AudioMgr.StopSound = function(audioID){
    cc.audioEngine.stopEffect(audioID);
}

AudioMgr.StopAllSounds = function(){
    cc.audioEngine.stopAllEffects();
}

AudioMgr.PauseSound = function(audioID){
    if(!AudioMgr.sfx_on || !audioID){
        return;
    }
    cc.audioEngine.pauseEffect(audioID);
}

AudioMgr.PauseAllSounds = function(){
    if(false == AudioMgr.sfx_on){
        return;
    }
    cc.audioEngine.pauseAllEffects();
}

AudioMgr.ResumeSound = function(audioID){
    if(!AudioMgr.sfx_on || !audioID){
        return;
    }
    cc.audioEngine.resumeEffect(audioID);
}


AudioMgr.ResumeAllSounds = function(){
    if(false == AudioMgr.sfx_on){
        return;
    }
    cc.audioEngine.resumeAllEffects();
}