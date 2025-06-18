export class SoundManager {
  private static instance: SoundManager;
  private sounds: Map<string, HTMLAudioElement> = new Map();

  private constructor() {
    this.loadSounds();
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  private loadSounds() {
    const soundFiles = {
      select: "/sounds/click-success.mp3",
      result: "/sounds/success-fanfare.mp3",
    };

    Object.entries(soundFiles).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.preload = "auto";
      audio.volume = 0.2;
      this.sounds.set(key, audio);
    });
  }

  public play(soundName: string) {
    const sound = this.sounds.get(soundName);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(console.error);
    }
  }

  public stop(soundName: string) {
    const sound = this.sounds.get(soundName);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }
}
