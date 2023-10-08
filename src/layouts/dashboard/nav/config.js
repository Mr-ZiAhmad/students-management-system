// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'student',
    path: '/dashboard/student',
    icon: icon('ic_user'),
  },
  {
    title: 'courses',
    path: '/courses',
    icon: icon('ic_lock'),
  },
  {
    title: 'attendence',
    path: '/attendence',
  },
];

export default navConfig;
