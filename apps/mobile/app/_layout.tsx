import "react-native-reanimated";
import { rqClient, rqPersister } from "@/components/providers/react-query";
import { useAuthStore } from "@/store/auth";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NetInfoProvider } from "../components/providers/net-info";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useReactQueryDevTools(rqClient);
  const [fontLoaded] = useFonts({
    Sans: require("../assets/fonts/sans.ttf"),
    SansM: require("../assets/fonts/sans-m.ttf"),
    SansSB: require("../assets/fonts/sans-sb.ttf"),
    SansB: require("../assets/fonts/sans-b.ttf"),
    Serif: require("../assets/fonts/serif.ttf")
  });
  const hydrate = useAuthStore((state) => state.hydrate);

  const hideSplash = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontLoaded) {
      hydrate();
      hideSplash();
    }
  }, [fontLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PersistQueryClientProvider
        client={rqClient}
        persistOptions={{ persister: rqPersister }}
      >
        <SafeAreaProvider>
          <NetInfoProvider />
          <Slot />
        </SafeAreaProvider>
      </PersistQueryClientProvider>
    </GestureHandlerRootView>
  );
}
