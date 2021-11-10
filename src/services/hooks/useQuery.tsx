import { USMap, WorldMap } from '../models/maps';
import { UseQueryOptions, useQuery } from 'react-query';
import { fetchUSMap, fetchWorldMap } from '../lib/maps';

import { DSVParsedArray } from 'd3-dsv';
import { MinimumWage, Rent } from '../models/minimumWage';
import { fetchMinimumWageCSV, fetchRentCSV } from '../lib/minimumWage';

const useMinimumWageQuery = (
  options?: UseQueryOptions<DSVParsedArray<MinimumWage>, Error>
) =>
  useQuery<DSVParsedArray<MinimumWage>, Error>(
    'minWage',
    fetchMinimumWageCSV,
    options
  );

const useRentQuery = (options?: UseQueryOptions<DSVParsedArray<Rent>, Error>) =>
  useQuery<DSVParsedArray<Rent>, Error>('rent', fetchRentCSV, options);

const useWorldMapQuery = (options?: UseQueryOptions<WorldMap, Error>) =>
  useQuery<WorldMap, Error>('worldMap', fetchWorldMap, options);

const useUSMapQuery = (options?: UseQueryOptions<USMap, Error>) =>
  useQuery<USMap, Error>('usMap', fetchUSMap, options);

export { useMinimumWageQuery, useWorldMapQuery, useUSMapQuery, useRentQuery };
