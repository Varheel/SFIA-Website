from bs4 import BeautifulSoup
import re

def html2css(html_file_path, css_file_path):
    # Read the HTML file
    with open(html_file_path, 'r') as file:
        html_content = file.read()

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Dictionary to store inline styles with their selectors
    inline_styles = {}

    # Find all elements with inline styles
    for element in soup.find_all(style=True):
        # Create selector for each element
        selector = element.name
        if element.get('id'):
            selector += f"#{element['id']}"
        if element.get('class'):
            selector += '.' + '.'.join(element['class'])
        
        # Clean up the style string
        style = element['style'].strip().replace('\n', ' ')
        style = re.sub(r'\s*;\s*', ';\n\t', style)


        # Add style to dictionary
        inline_styles[selector] = style

    # Convert the inline styles to our SCSS format
    css_content = ""
    for selector, style in inline_styles.items():
        css_content += f"{selector} \n{{\n    {style}}}\n\n"
        css_content = re.sub(r';\n\t}', ';\n}', css_content)

    # Append the generated css to html2css.css
    with open(css_file_path, 'a') as css_file:
        css_file.write(css_content)

html_file_path = 'temp/temp.html'
css_file_path = 'temp/css/util/output.css'
html2css(html_file_path, css_file_path)
