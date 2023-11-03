import { useRouter } from "../router";

export const ScreenOne = () => {
  const router = useRouter();

  return (
    <>
      <actionbar title="Screen One"/>
      {/* @ts-ignore */}
      <gridlayout rows="*,auto,*">
        <button
          row="1"
          iosOverflowSafeArea="false" 
          text="Screen B"
          on:tap={() => {
            router.navigate("ScreenTwo");
          }}
        />
        
      </gridlayout>
    </>
  );
};
