import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FAQ_ITEMS = [
  {
    question: 'Что такое целиакия?',
    answer: 'Целиакия - это аутоиммунное заболевание, при котором употребление глютена вызывает повреждение тонкого кишечника. Это генетическое заболевание, которое может привести к различным осложнениям, если его не лечить правильной диетой.',
  },
  {
    question: 'Какие продукты содержат глютен?',
    answer: 'Глютен содержится в пшенице, ржи, ячмене и их производных. Также он может скрываться в соусах, приправах и обработанных продуктах. Всегда проверяйте этикетки на наличие пшеничной муки, солода, крахмала и других производных глютенсодержащих злаков.',
  },
  {
    question: 'Как определить безглютеновый продукт?',
    answer: 'Ищите маркировку "без глютена" или значок перечеркнутого колоса. Внимательно читайте состав продукта. Используйте наш сканер для проверки продуктов по штрих-коду. Доверяйте продуктам, сертифицированным организациями по целиакии.',
  },
  {
    question: 'Можно ли полностью вылечить целиакию?',
    answer: 'На данный момент целиакия неизлечима, но соблюдение строгой безглютеновой диеты позволяет контролировать симптомы и предотвращать осложнения. Важно полностью исключить глютен из рациона на протяжении всей жизни.',
  },
  {
    question: 'Какие альтернативы пшеничной муке существуют?',
    answer: 'Существует множество безглютеновых альтернатив: рисовая, кукурузная, гречневая, амарантовая, киноа, кокосовая и миндальная мука. Также можно использовать крахмалы (кукурузный, картофельный, тапиоковый) и безглютеновые смеси для выпечки.',
  },
];

const RESOURCES = [
  {
    title: 'Ассоциация больных целиакией',
    url: 'https://celiac-association.org',
    icon: '🏥'
  },
  {
    title: 'Международный фонд целиакии',
    url: 'https://celiac-foundation.org',
    icon: '🌎'
  },
  {
    title: 'Группа поддержки',
    url: 'https://celiac-support.org',
    icon: '👥'
  },
  {
    title: 'Рецепты без глютена',
    url: 'https://gluten-free-recipes.com',
    icon: '🍽️'
  },
];

export default function InfoScreen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#67B26F', '#4ca2cd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.title}>Информация</Text>
        <Text style={styles.subtitle}>Всё о безглютеновой жизни</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Часто задаваемые вопросы</Text>
          
          {FAQ_ITEMS.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.faqItem,
                expandedIndex === index && styles.faqItemExpanded
              ]}
              onPress={() => toggleExpand(index)}
              activeOpacity={0.8}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.question}>{item.question}</Text>
                {expandedIndex === index ? 
                  <ChevronUp size={20} color="#67B26F" /> : 
                  <ChevronDown size={20} color="#67B26F" />
                }
              </View>
              
              {expandedIndex === index && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </TouchableOpacity>
          ))}

          <Text style={[styles.sectionTitle, styles.resourcesTitle]}>Полезные ресурсы</Text>
          
          <View style={styles.resourcesGrid}>
            {RESOURCES.map((resource, index) => (
              <TouchableOpacity key={index} style={styles.resourceCard}>
                <Text style={styles.resourceIcon}>{resource.icon}</Text>
                <Text style={styles.resourceTitle}>{resource.title}</Text>
                <View style={styles.resourceLink}>
                  <ExternalLink size={14} color="#67B26F" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>О приложении</Text>
            <Text style={styles.aboutText}>
              Gluten Free Life - ваш помощник в безглютеновой жизни. Мы помогаем находить безопасные продукты, места и рецепты.
            </Text>
            <Text style={styles.version}>Версия 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  faqItemExpanded: {
    borderColor: '#67B26F',
    borderWidth: 1,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
  },
  answer: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
    marginTop: 12,
    paddingTop: 12,
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
  },
  resourcesTitle: {
    marginTop: 24,
  },
  resourcesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resourceCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  resourceIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  resourceTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
  },
  resourceLink: {
    padding: 4,
  },
  aboutSection: {
    marginTop: 32,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
    marginBottom: 16,
  },
  version: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'right',
  },
});