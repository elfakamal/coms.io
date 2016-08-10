import moment from 'moment';
import { weekBoundaries } from '../helpers/week';
import {
  GRID_COMPACT_DISPLAY_UNIT,
  GRID_CALENDAR_VIEW_DAY_UNIT,
  FRANCE_INTER_STATION_ID
} from '../constants';

export default {
  /**
   * The localStorage key used to store state. The default value is redux.
   */
  key: 'gdp',

  /**
   * Slicer allows us to define our own function which will
   * be used to determine which parts should be synced with localStorage.
   */
  slicer: paths => state => ({
    gdp: {

      timeUnit: state.gdp.timeUnit ? state.gdp.timeUnit : GRID_COMPACT_DISPLAY_UNIT,

      selection: {
        currentStationId: ( state.gdp.selection && state.gdp.selection.currentStationId ) ? state.gdp.selection.currentStationId : FRANCE_INTER_STATION_ID
      },

      calendarInfo: {
        view: ( state.gdp.calendarInfo && state.gdp.calendarInfo.view ) ? state.gdp.calendarInfo.view : GRID_CALENDAR_VIEW_DAY_UNIT,

        /**
         * This key supports either a number of an array
         * in case of `view = 1`, which refers to 'day', calendarUnitValue will be a timestamp
         * in case of `view = 7`, which refers to 'week', calendarUnitValue will be array of 7 timestamps.
         *
         * Default value: as we have a preference for the day display, we will set this key to today's timestamp.
         */
        currentUnitValue: ( state.gdp.calendarInfo && state.gdp.calendarInfo.currentUnitValue ) ? state.gdp.calendarInfo.currentUnitValue : +moment().startOf('day').format('x')
      }
    }
  })
};
