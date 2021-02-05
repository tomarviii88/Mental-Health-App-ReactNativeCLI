import React from 'react';
import {StyleSheet, Text, View, LogBox, Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import {colors} from '../constants/theme';
LogBox.ignoreAllLogs();

const SmileyGif = () => {
  return (
    <View style={{width: 100, height: 100, backgroundColor: 'transparent'}}>
      <Image
        source={{
          uri:
            'https://static.skaip.org/img/emoticons/180x180/f6fcff/smilerobot.gif',
        }}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

const ChatWithTink = props => {
  const steps = [
    {
      id: '0',
      message: `Hey, ${props.route.params.name}! I'm Tink`,
      trigger: '1',
    },
    {
      id: '1',
      message: 'I was getting bored. Glad to see you here.',
      trigger: '2',
    },
    {
      id: '2',
      message: 'How can I help you?',
      trigger: '3',
    },

    {
      id: '3',
      options: [
        {value: 1, label: 'Need motivation!', trigger: '5'},
        {value: 2, label: 'Cheer me up!', trigger: '10'},
        {value: 3, label: 'Not feeling good!'},
        {value: 4, label: 'Day was not good!'},
        {value: 5, label: 'Feeling Happy today'},
      ],
    },
    {
      id: '5',
      message: 'Sure! I can help you get some',
      trigger: '6',
    },
    {
      id: '6',
      message:
        'I can give you some motivational quotes from successfull people.',
      trigger: '7',
    },
    {
      id: '7',
      message:
        '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.',
      trigger: '8',
    },
    {
      id: '8',
      options: [
        {value: 1, label: 'Another quote', trigger: '7'},
        {value: 2, label: 'Feeling motivated', trigger: '9'},
      ],
    },
    {
      id: '9',
      message: 'I am glad to know that. :)',
      trigger: '2',
    },
    {
      id: '10',
      message: 'I think a joke can help XP.',
      trigger: '11',
    },
    {
      id: '11',
      message:
        'A dad walks into his sons room and says,"Son I told you time after time," if you keep that up you\'re going to get blind. His son says, "dad I\'m over here',
      trigger: '12',
    },
    {
      id: '12',
      options: [
        {value: 1, label: 'Funny', trigger: '13'},
        {value: 2, label: 'Bad one', trigger: '14'},
      ],
    },
    {
      id: '13',
      message: 'I know XD.',
      trigger: '2',
    },
    {
      id: '14',
      message: 'Sorry. I will work on my sense of humour.',
      trigger: '2',
    },
  ];

  return (
    <View style={styles.container}>
      <ChatBot
        steps={steps}
        botAvatar={
          'https://i.pinimg.com/736x/fd/a1/3b/fda13b9d6d88f25a9d968901d319216a.jpg'
        }
        botFontColor={colors.secondary}
        bubbleStyle={{backgroundColor: colors.accent}}
        optionFontColor={colors.white}
        optionBubbleColor={colors.secondary}
        userBubbleStyle={{backgroundColor: colors.accent}}
        userFontColor={colors.secondary}
        submitButtonStyle={{
          backgroundColor: colors.accent,
          color: colors.white,
        }}
      />
    </View>
  );
};

export default ChatWithTink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
