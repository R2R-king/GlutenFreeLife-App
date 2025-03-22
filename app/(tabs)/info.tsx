import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQ_ITEMS = [
  {
    question: 'Что такое целиакия?',
    answer: 'Целиакия - это аутоиммунное заболевание, при котором употребление глютена вызывает повреждение тонкого кишечника.',
  },
  {
    question: 'Какие продукты содержат глютен?',
    answer: 'Глютен содержится в пшенице, ржи, ячмене и их производных. Также он может скрываться в соусах, приправах и обработанных продуктах.',
  },
  {
    question: 'Как определить безглютеновый продукт?',
    answer: 'Ищите маркировку "без глютена" или значок перечеркнутого колоса. Внимательно читайте состав продукта.',
  },
];

export default function InfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Часто задаваемые вопросы</Text>
      {FAQ_ITEMS.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
      <View style={styles.resourcesSection}>
        <Text style={styles.sectionTitle}>Полезные ресурсы</Text>
        <Text style={styles.resourceLink}>• Ассоциация больных целиакией</Text>
        <Text style={styles.resourceLink}>• Международный фонд целиакии</Text>
        <Text style={styles.resourceLink}>• Группа поддержки</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4CAF50',
  },
  answer: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
  },
  resourcesSection: {
    marginTop: 30,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  resourceLink: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
    paddingLeft: 10,
  },
});