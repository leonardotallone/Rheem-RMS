import React from "react";
import ReactDOM from "react-dom/client";

import LoginUserProvider from "./contexts/LogInContext";
import CreateUserProvider from "./contexts/CreateUserContext";
import UserProvider from "./contexts/UserContext";
import ListUserProvider from "./contexts/UserListContext";
import TestSheetProvider from "./contexts/TestSheetContext";
import TestSheetSetValuesProvider from "./contexts/TestSheetSetValuesContext";
import RMSProfileProvider from "./contexts/RMSProfilesContext";
import OverseerProvider from "./contexts/OverseerListContext";
import WorkAreasProvider from "./contexts/WorkAreasContext";
import UpdateUserDataProvider from "./contexts/UpdateUserDataContext";
import IndirectPasswordRecoverProvider from "./contexts/IndirectPasswordRecoverContext";
import UpdateUserStateProvider from "./contexts/UpdateUserStateContext";
import ResetPasswordDirectUserProvider from "./contexts/ResetPasswordDirectUserContext";
import CreateNewPlanProvider from "./contexts/CreateNewPlanContext";
import CreateNewBatchProvider from "./contexts/CreateNewBatchContext";
import GetAllPlansProvider from "./contexts/GetAllPlansContext";
import GetAllReserveBatchsProvider from "./contexts/GetAllReserveBatchsContext";
import GetUserAndOverseerByUserIDProvider from "./contexts/GetUserAndOverseerByUserIDContext";
import IndirectPasswordRecoverPasswordProvider from "./contexts/IndirectPasswordRecoverPasswordContext";
import GetUsersByOverseerProvider from "./contexts/GetUsersByOverseerContext";
import UpdatePlanStateProvider from "./contexts/UpdatePlanStateContext";
import GetAllBatchInsidePlanProvider from "./contexts/GetAllBatchInsidePlanContext";
import GetPositionByAreaProvider from "./contexts/GetPositionByAreaContext";
import RMSProfilesProvider from "./contexts/GetAllRMSProfilesContext";
import GetUsersByOverseerEmailProvider from "./contexts/GetUserByOverseerEmailContext";
import GetAreaAndPositionUserProvider from "./contexts/GetAreaAndPositionUserContext";
import CounterDigitalPlansProvider from "./contexts/CounterDigitalPlansContext";
import CounterMechanicPlansProvider from "./contexts/CounterMechanicPlansContext";
import SkuListProvider from "./contexts/SkuListContext";
import SkuDetailsProvider from "./contexts/SkuDetailsContext";
import BatchCounterContext from "./contexts/BatchCounterContext";
import GetAllFinishedPlansProvider from "./contexts/GetAllFinishedPlansContext";
import FlagPartialCountdownProvider from "./contexts/FlagPartialCountDownContext";
import UpdateBatchProvider from "./contexts/UpdateBatchContext";
import UpdateBatchStateProvider from "./contexts/UpdateBatchStateContext";
import PartialLiberationProvider from "./contexts/PartialLiberationContext";
import GetAllReserveBatchsInPlanProvider from "./contexts/GetAllReserveBatchsInPlanContext";
import GetAllRejectedBatchsProvider from "./contexts/GetAllRejectedBatchsContext";
import ReprocessRandDProvider from "./contexts/ReprocessRandDContext";
import PetitionMVTProvider from "./contexts/PetitionMVTContext";
import GetAllMVTPetitionProvider from "./contexts/GetAllMVTPetitionContext";
import MVTUpdateQaStateProvider from "./contexts/MVTUpdateQaStatusContext";
import MVTUpdateProductionStatusProvider from "./contexts/MVTUpdateProductionStatusContext";
import MVTUpdatIndustrialStatusProvider from "./contexts/MVTUpdateIndustrialStatusContext";
import MVTUpdateStatusProvider from "./contexts/MVTUpdateStatusContext";
import MVTUpdateRdStatusProvider from "./contexts/MVTUpdateRdStatusContext"
import UploadMvtFileProvider from "./contexts/UploadMVTFileContext";

import GetAllQADPlansProvider from "./contexts/QAD/GetAllQADPlansContext";
import GetAllQADComponentsProvider from "./contexts/QAD/GetAllQADComponentsContext";
import GetCPSInsideBatchQADProvider from "./contexts/QAD/GetCPSInsideBatchQADContext";
import GetBatchStatusQADProvider from "./contexts/QAD/GetGangStatusQADContext";

import App from "./App";

  const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TestSheetSetValuesProvider>
  <TestSheetProvider>
  <ListUserProvider>
  <UserProvider>
  <CreateUserProvider>
  <LoginUserProvider>
  <RMSProfileProvider>
  <OverseerProvider>
  <WorkAreasProvider>
  <UpdateUserDataProvider>
  <IndirectPasswordRecoverProvider>
  <UpdateUserStateProvider>
  <ResetPasswordDirectUserProvider>
  <CreateNewPlanProvider>
  <GetAllPlansProvider>
  <GetAllReserveBatchsProvider>
  <GetUserAndOverseerByUserIDProvider>
  <IndirectPasswordRecoverPasswordProvider>
  <GetUsersByOverseerProvider>
  <CreateNewBatchProvider>
  <UpdatePlanStateProvider>
  <GetAllBatchInsidePlanProvider>
  <GetPositionByAreaProvider>
  <RMSProfilesProvider>
  <GetUsersByOverseerEmailProvider>
  <GetAreaAndPositionUserProvider>
  <CounterDigitalPlansProvider>
  <CounterMechanicPlansProvider>
  <SkuListProvider>
  <SkuDetailsProvider>
  <BatchCounterContext>
  <GetAllFinishedPlansProvider>
  <FlagPartialCountdownProvider>
  <UpdateBatchProvider>
  <UpdateBatchStateProvider>
  <PartialLiberationProvider>
  <GetAllReserveBatchsInPlanProvider>
  <GetAllRejectedBatchsProvider>
  <ReprocessRandDProvider>
  <PetitionMVTProvider>
  <GetAllMVTPetitionProvider>
  <MVTUpdateQaStateProvider>
  <MVTUpdateProductionStatusProvider>
  <MVTUpdateRdStatusProvider>
  <MVTUpdatIndustrialStatusProvider>
  <MVTUpdateStatusProvider>
  <UploadMvtFileProvider>

  <GetAllQADPlansProvider>
  <GetAllQADComponentsProvider>
  <GetCPSInsideBatchQADProvider>
  <GetBatchStatusQADProvider>


    <App />
 

  </GetBatchStatusQADProvider>
  </GetCPSInsideBatchQADProvider>
  </GetAllQADComponentsProvider>
  </GetAllQADPlansProvider>

  </UploadMvtFileProvider>
  </MVTUpdateStatusProvider>
  </MVTUpdatIndustrialStatusProvider>
  </MVTUpdateRdStatusProvider>
  </MVTUpdateProductionStatusProvider>
  </MVTUpdateQaStateProvider>
  </GetAllMVTPetitionProvider>
  </PetitionMVTProvider>
  </ReprocessRandDProvider>
  </GetAllRejectedBatchsProvider>
  </GetAllReserveBatchsInPlanProvider>
  </PartialLiberationProvider>
  </UpdateBatchStateProvider>
  </UpdateBatchProvider>
  </FlagPartialCountdownProvider>
  </GetAllFinishedPlansProvider>
  </BatchCounterContext>
  </SkuDetailsProvider>
  </SkuListProvider>
  </CounterMechanicPlansProvider>
  </CounterDigitalPlansProvider>
  </GetAreaAndPositionUserProvider>
  </GetUsersByOverseerEmailProvider>
  </RMSProfilesProvider>
  </GetPositionByAreaProvider>
  </GetAllBatchInsidePlanProvider>
  </UpdatePlanStateProvider>
  </CreateNewBatchProvider>
  </GetUsersByOverseerProvider>
  </IndirectPasswordRecoverPasswordProvider>
  </GetUserAndOverseerByUserIDProvider>
  </GetAllReserveBatchsProvider>
  </GetAllPlansProvider>
  </CreateNewPlanProvider>
  </ResetPasswordDirectUserProvider>
  </UpdateUserStateProvider>
  </IndirectPasswordRecoverProvider>
  </UpdateUserDataProvider>
  </WorkAreasProvider>
  </OverseerProvider>
  </RMSProfileProvider>
  </LoginUserProvider>
  </CreateUserProvider>
  </UserProvider>
  </ListUserProvider>
  </TestSheetProvider>
  </TestSheetSetValuesProvider>
);
