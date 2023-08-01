import {StyleSheet} from 'react-native';

const ApplicationStyle = StyleSheet.create({
  backArrowContainer: {paddingLeft: 10},
  screenTitleText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 160,
    marginBottom: 30,
  },
  backArrow: {
    height: 25,
    width: 25,
  },
  nextBtn: {
    display: 'flex',
    marginTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    marginBottom: 75,
  },
  nextBtnTitle: {fontSize: 22},
});

export {ApplicationStyle};
