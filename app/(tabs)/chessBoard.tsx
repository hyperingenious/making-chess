import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import pieceImages from './pieceImages';
import initiallyGeneratedBoard from './initiallyGeneratredBoard';
import { TouchableWithoutFeedback } from 'react-native';


export default function ChessBoard() {

  const [chessBoard, setChessBoard] = useState(initiallyGeneratedBoard);
  const [activeBox, setActiveBox] = useState<string | null>(null)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.board}>
          {chessBoard.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((box, boxIndex) => {
                const isBlack = (rowIndex + boxIndex) % 2 !== 0;
                return (
                  <TouchableWithoutFeedback key={boxIndex} onPress={() => setActiveBox(() => box.piece && box.position)} >
                    <View
                      style={[
                        styles.box,
                        isBlack ? styles.darkBox : styles.lightBox,
                        activeBox && activeBox == box.position ? styles.activeBox : null
                      ]}
                    >
                      {box.piece && (
                        <Image
                          source={pieceImages[box.piece]}
                          style={styles.piece}
                        />
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  board: {
    width: 320, // 8 boxes * 40px each (adjust as needed)
    height: 320, // 8 boxes * 40px each (adjust as needed)
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 40, // adjust as needed
    height: 40, // adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBox: {
    backgroundColor: '#739552'
  },
  lightBox: {
    backgroundColor: '#EBECD0'
  },
  activeBox: {
    backgroundColor: '#f5f682'
  },
  piece: {
    width: 40,
    height: 40,
  },
});
