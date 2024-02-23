import Link from "next/link";


export default function Home() {
  return (
    <div>
      
      <label htmlFor="myfile" className="chous">Выберите файл</label>
      <input type="file" className="my" id="myfile" name="myfile"/>

    <div>
      <table>
        <tr>
          <th>Название файла:</th>
          <th>Формат файла:</th>
          <th>Найденное слово:</th>
        </tr>
        <tr>
          <td>Первый файл</td>
          <td>xlsx</td>
          <td>Table</td>
        </tr>
        <tr>
          <td>Второй файл</td>
          <td>docx</td>
          <td>Door</td>
        </tr>
        <tr>
          <td>Третий файл</td>
          <td>pdf</td>
          <td>Sport</td>
        </tr>
      </table>
    </div>
      
    </div>
  );
}
