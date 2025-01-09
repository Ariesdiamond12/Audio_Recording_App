import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-pblack'>Audify</Text>
      <StatusBar style="auto" />
      <Link href='/home'>Go to Recorder</Link>
    </View>
  )
}

export default index
