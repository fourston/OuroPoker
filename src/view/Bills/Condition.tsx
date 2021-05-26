import React, { FC } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export const Condition: FC = () => (
  <ScrollView style={{ padding: 20 }}>
    <Text style={[styles.textLG, { color: '#FFB443', marginBottom: 10 }]}> Общие положения</Text>
    <Text style={styles.conditionText}>
      Документ фиксирует минимальный необходимый для коммерческого запуска услуги набор функционала, наборы передаваемых и хранимых данных. Базовый набор
      требований не подлежит изменению в ходе подготовки к запуску проекта. Кроме случаев возникновения необходимости внесения дополнительного функционала,
      порядок которого обговаривается отдельно.
    </Text>
    <Text style={[styles.textLG, { color: '#FFB443', marginBottom: 10 }]}> Зоны ответственности участников</Text>
    <Text style={styles.conditionText}>1.2.1 Виды ответственности</Text>
    <Text style={[styles.conditionText, { marginLeft: 20 }]}>
      Сторона, являющаяся ответственной за определенную задачу, осуществляет ее выполнение, а также выделение необходимых для этого ресурсов. Однако, если обе
      стороны отмечены как ответственные за выполнение задачи, это означает, что каждая сторона выделяет собственные ресурсы, необходимые для ее
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  conditionText: {
    fontSize: 10,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  textLG: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
  },
});
