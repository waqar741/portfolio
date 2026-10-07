import zipfile
import xml.etree.ElementTree as ET

with zipfile.ZipFile('Developer Portfolio SEO Audit.docx') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    text = [node.text for node in root.iter(f'{{{ns["w"]}}}t') if node.text]
    with open('docx_output.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(text))
