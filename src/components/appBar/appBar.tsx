import Services from './services/services';
import ListView from './listView/listView';
import Locate from './locate/locate';
import Zoom from './zoom/zoom';

interface IProps {
  onZoom: (value: number) => void;
  onLocate: () => void;
}

export default function AppBar({ onZoom, onLocate }: IProps) {
  return (
    <header
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        left: 0,
        width: '98%',
        height: '100px',
        marginLeft: '1%',
        marginRight: '1%',
        borderBottom: '1px solid #ccc',
        zIndex: 100,
      }}
    >
      <Services />
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
        <ListView />
        <Locate onLocate={onLocate} />
        <Zoom onZoom={onZoom} />
      </div>
    </header>
  );
}
