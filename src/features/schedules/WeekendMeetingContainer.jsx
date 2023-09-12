import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dateFormat from 'dateformat';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FlashAutoIcon from '@mui/icons-material/FlashAuto';
import PrintIcon from '@mui/icons-material/Print';
import WeekendMeetingItem from './WeekendMeetingItem';
import WeekendMeetingWeekSelect from './WeekendMeetingWeekSelect';
import { Schedules } from '../../classes/Schedules';
import { PublicTalkPagination } from '../publicTalks';
import { getCurrentWeekDate } from '../../utils/app';

const WeekendMeetingContainer = () => {
  const { t } = useTranslation('ui');

  const [page, setPage] = useState(0);
  const [isDlgOpen, setIsDlgOpen] = useState(false);
  const [actionType, setActionType] = useState('autofill');

  const schedules = useMemo(
    () =>
      Schedules.list
        .filter((record) => record.weekOf >= '06/05/2023')
        .sort((a, b) => {
          const dateA = a.weekOf.split('/')[2] + '/' + a.weekOf.split('/')[0] + '/' + a.weekOf.split('/')[1];
          const dateB = b.weekOf.split('/')[2] + '/' + b.weekOf.split('/')[0] + '/' + b.weekOf.split('/')[1];
          return dateA > dateB ? 1 : -1;
        }),
    []
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenAutofill = () => {
    setActionType('autofill');
    setIsDlgOpen(true);
  };

  const handleDeleteAssignment = () => {
    setActionType('delete');
    setIsDlgOpen(true);
  };

  const handleExportSchedule = () => {
    setActionType('export');
    setIsDlgOpen(true);
  };

  useEffect(() => {
    const currentWeek = getCurrentWeekDate();
    const currentWeekFormatted = dateFormat(currentWeek, 'mm/dd/yyyy');
    const findIndex = schedules.findIndex((record) => record.weekOf === currentWeekFormatted);
    const weekPage = (findIndex - (findIndex % 10)) / 10;
    setPage(weekPage);
  }, [schedules]);

  return (
    <Box sx={{ marginBottom: '50px' }}>
      {isDlgOpen && <WeekendMeetingWeekSelect actionType={actionType} open={isDlgOpen} setOpen={setIsDlgOpen} />}

      <Box>
        {schedules.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button variant="outlined" color="secondary" startIcon={<FlashAutoIcon />} onClick={handleOpenAutofill}>
                {t('autofill')}
              </Button>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleDeleteAssignment}>
                {t('delete')}
              </Button>
              <Button variant="outlined" startIcon={<PrintIcon />} onClick={handleExportSchedule}>
                {t('export')}
              </Button>
            </Box>
            <PublicTalkPagination count={schedules.length} page={page} handleChangePage={handleChangePage} />
          </Box>
        )}

        {schedules.length > 0 &&
          schedules
            .slice(page * 10, page * 10 + 10)
            .map((schedule) => <WeekendMeetingItem key={schedule.weekOf} weekOf={schedule.weekOf} />)}

        {schedules.length > 0 && (
          <PublicTalkPagination count={schedules.length} page={page} handleChangePage={handleChangePage} />
        )}
      </Box>
    </Box>
  );
};

export default WeekendMeetingContainer;
