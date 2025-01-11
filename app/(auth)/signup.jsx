import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Image } from "react-native";
import { UserAuth } from "../../context/AuthContext";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { images } from "../../constants";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigation();
  const { signUpNewUser } = UserAuth();

  // const handleSubmit = async () => {
  //   setIsSubmitting(true);
  //   setError("");

  //   const { username, email, password } = form;

  //   // Call signUpNewUser function and handle the result
  //   const result = await signUpNewUser(username, email, password);
  //   setIsSubmitting(false);

  //   if (!result.success) {
  //     setError(result.message);
  //   } else {
  //     // Redirect to another page or display success message
  //     console.log("User signed up successfully!");
  //     navigate('/'); // Navigate to home or another page
  //   }
  // };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.Logo}
            resizeMode="contain"
            className="w-[115px] h-[50px]"
          />
          <Text className="text-2xl text-[#333333] mt-10 font-semibold items-center">
            Create an account
          </Text>

          {error ? <Text className="text-red-500 mt-4">{error}</Text> : null}

          {/* FormField components for username, email, and password */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />

          {/* Custom Button for submitting */}
          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-5 flex-row gap-2">
            <Text className="text-md text-[#333333] font-medium">
              Already have an account?
            </Text>
            <Link href="/signin" className="text-md font-bold text-[#FF725E]">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
