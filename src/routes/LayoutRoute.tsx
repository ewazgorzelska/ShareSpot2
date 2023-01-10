import MainTemplate from 'templates/MainTemplate/MainTemplate';

interface ILayoutRouteProps {
  children: React.ReactNode;
}
export const LayoutRoute: React.FC<ILayoutRouteProps> = ({ children }) => {
  return <MainTemplate>{children}</MainTemplate>;
};
