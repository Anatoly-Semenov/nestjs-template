import { CommonProviders } from './common.providers';
import { BusinessLogicProviders } from './business-logic.providers';

export const ProvidersExport = [...CommonProviders, ...BusinessLogicProviders];
