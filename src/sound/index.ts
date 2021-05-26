import { Audio } from 'expo-av';
import { AsyncStorage } from 'react-native';
// import { Platform } from 'react-native';
// const soundScale = Platform.OS === 'ios' ? 0.01 : 1;

const lib = {
  my_turn: require('./my_turn.mp3'),
  rise: require('./rise.mp3'),
  fishki: require('./fishki.mp3'),
  game_over: require('./game_over.mp3'),
  cards: require('./cards.mp3'),
  menu_click: require('./menu_click.mp3'),
  next_turn: require('./next_turn.mp3'),
  check: require('./check.mp3'),
  pass: require('./pass.mp3'),
  rise_slider: require('./rise_slider.mp3'),
  fishki_to_bank: require('./fishki_to_bank.mp3'),
}

export default async (sound) => {
  const soundScale = 1;
  const volume_s = +(await AsyncStorage.getItem('masterVolumeSound')) * soundScale;

  if (!volume_s){
    return;
  }

  const soundObject = new Audio.Sound();

  try {
    await soundObject.loadAsync(
      lib[sound],
      {
        shouldPlay: true,
        volume: volume_s
      }
    );
    await soundObject.playAsync();
    soundObject.setOnPlaybackStatusUpdate(async status=>{
      if (status.isLoaded && !status.isPlaying){
        console.log(sound)
        await soundObject.unloadAsync();
      }
    });
  } catch (error) {}
};

// export const playFishka = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;

//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./fishki.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playGameEnd = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./game_over.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playCards = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./cards.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playMenu = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./menu_click.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playTurn = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(
//       require('./my_turn.mp3'),
//       {shouldPlay: true, volume: volume_s}
//     );
//     await soundObject.playAsync();
//     soundObject.setOnPlaybackStatusUpdate(async status=>{
//       if (status.isLoaded && !status.isPlaying){
//         console.log(status)
//         await soundObject.unloadAsync();
//       }
//     });
//   } catch (error) {}
// };
// export const playNextTurn = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./next_turn.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();

//   } catch (error) {}
// };

// export const playRise = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./rise.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };

// export const playCheck = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./check.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playPass = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./pass.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playSlider = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./rise_slider.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
// export const playToBank = async () => {
//   const soundObject = new Audio.Sound();
//   let volume_s = (Number(await AsyncStorage.getItem('masterVolumeSound'))) * soundScale;
  
//   if (!volume_s){
//     return;
//   }

//   try {
//     await soundObject.loadAsync(require('./fishki_to_bank.mp3'));
//     await soundObject.setVolumeAsync(volume_s)
//     await soundObject.playAsync();
//   } catch (error) {}
// };
