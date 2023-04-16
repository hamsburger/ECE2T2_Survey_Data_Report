# Fourth Year Opinions
Survey results from 52 ECE2T3 4th-Year UofT Students.

## Install Dependencies
Before installing dependencies from the following command, create a virtual environment and install
requirements.txt to commence development. Do **NOT** use Python 3.11 for your virtual env, use 3.10.
```
pip install -r requirements.txt
```

# Collaborating with Others:
### When you want to work on visualizing a question (for example, plot a bar chart What Is Your Gender?), assign yourself to that column through this spreadsheet so we don't duplicate work:
https://docs.google.com/spreadsheets/d/1Er5QhbmRjqlDy8VP3qVs7yf_IEnPd11_SMl5wWqZkYc/edit#gid=0
<br>
<br>

# Getting Started with Development
Don't worry, plotly development has a low learning-curve! You can also refer to some of the **CODE and HELPER FUNCTIONS** I've already written in **ECE_Fourth_Year_Opinions.ipynb** and **setup_notebook.ipynb** to get a feel for how to use them to easily generate tables, charts, and even word maps.

Skim both .ipynb notebooks to get an idea of what's possible in Plotly!
<br>
<br>

# Jupyter Notebook to HTML Conversion
Notebook to HTML conversion can be done by running the script jupyter_to_html.sh, using the following command
```
bash jupyter_to_html.sh
```
**WARNING:** If the script does not run, you may have to run the first code cell manually, then run the bash script because the notebook to HTML converter sometimes does not execute magic cell command present in the first cell
(commands prefixed with % or %%).
![First Code Cell](tutorial_images/first_code_cell.png)

All code cell INPUTS are automatically hidden by the output html. For example: you will not see Data Cleaning section
of the notebook in the output.


![Data Cleaning](tutorial_images/data_clean.png)


To ignore a cell completely from output html, add a cell tag "hide_code" to a cell (See Example Below, where I assign hide_code


to Data Cleaning markdown because I don't want it in the HTML Output. The cell is only for personal reference)
![GIF portraying the steps required to hide cell from HTML output](tutorial_images/how_to_hide_cell.gif)

Every markdown cell has natural bottom margins. To remove bottom margins from a cell, add the cell tag "no_margin" to a cell
<p align="center">
  <img alt="Margin" src="tutorial_images/margin.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="No Margin" src="tutorial_images/no_margin.png" width="45%">
</p>
<br>
<br>

# Helper Files for Data Analysis Reference
**all_columns.txt**: Names of columns

## Notebook Style Configuration
CSS can be configured by changing html_template/static/index.css and html_template/static/index.html.j2.
For more info on template customization, see here: https://nbconvert.readthedocs.io/en/5.5.0/customizing.html
and https://nbconvert.readthedocs.io/en/latest/customizing.html





