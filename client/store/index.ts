import { create, StateCreator } from 'zustand'

type Screen = 'main' | 'frontend' | 'backend'

type SelectionOptions = {
  screen: Screen
  optionId: string | undefined
}

type AuthKitOnboardingActions = {
  //to change to screen and options to render on that screen
  setScreen: (screen: Screen) => void
  //to store user tile selection
  setScreenOptions: (screenSelection: SelectionOptions) => void
  resetAuthStore: () => void
  //set final options before screens like login/register or forgot pass
  setFinalSelection: (id: string) => void

  setRoute: (route: string) => void
}

type AuthKitOnboardingValue = {
  //this will be used to select current screen type and tiles to show
  screen: Screen
  //this will be stored after a selection on specific screen with selected tile id
  screenOptions: SelectionOptions[] | undefined
  isInProgress: boolean
  finalScreenSelectionOption: string | undefined
  route: string | undefined
}

type AuthKitOnboardingStore = AuthKitOnboardingActions & AuthKitOnboardingValue

const INITIAL_STORE_VALUES: AuthKitOnboardingValue = {
  screen: 'main',
  finalScreenSelectionOption: undefined,
  screenOptions: undefined,
  isInProgress: false,
  route: undefined,
}

const authKitStoreSlice: StateCreator<AuthKitOnboardingStore> = (
  setState,
  get,
  store
) => ({
  ...INITIAL_STORE_VALUES,

  setScreen: (screen) => setState((state) => ({ ...state, screen })),

  setScreenOptions: (screenOptions) => {
    const existingSelections = get().screenOptions || []
    const removeExistingSelection = existingSelections.filter(
      (selection) => selection.screen !== screenOptions.screen
    )
    const updatedScreenSelectionOptions = [
      ...removeExistingSelection,
      screenOptions,
    ]
    setState((state) => ({
      ...state,
      isInProgress: !!updatedScreenSelectionOptions.length,
      screenOptions: updatedScreenSelectionOptions,
    }))
  },

  setFinalSelection: (id) =>
    setState((state) => ({ ...state, finalScreenSelectionOption: id })),

  setRoute: (route) => setState((state) => ({ ...state, route: route })),

  resetAuthStore: () => setState(() => ({ ...INITIAL_STORE_VALUES })),
})

export const useAuthStore = create<AuthKitOnboardingStore>(
  (set, get, state) => ({
    ...authKitStoreSlice(set, get, state),
  })
)
