import { Map } from "./Map"
import Leaflet from 'leaflet'
import '../App.css';
import 'leaflet/dist/leaflet.css';


function AccessPage() {
        
return (
  <div className="AccessPage">
    <div class="text-center">
    <h1>アクセス</h1>
    <div>〒213-0026
神奈川県川崎市高津区久末２１９９−３</div>
    <a href="https://www.mapion.co.jp/m2/35.56812208,139.62769613,16/poi=21430225088?n_end=%E6%9C%89%E9%99%90%E4%BC%9A%E7%A4%BE%E3%82%BF%E3%83%8A%E3%82%AB%E5%AE%A4%E5%86%85%E8%A3%85%E9%A3%BE&n_end_lat=35.56812208&n_end_lon=139.62769613">アクセス検索</a>
  <Map />
  </div>
</div>
  
)
}

export default AccessPage