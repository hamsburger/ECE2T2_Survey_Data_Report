# Fourth Year Opinions
Survey responses from 54 ECE2T2 UofT Students graduating in 2023.
Results: https://hamsburger.github.io/ECE2T2_Survey_Results/

## How is the Website Generated?
The above survey data report is generated using .sh bash scripts starting with the substring **jupyter_to_html**, which makes use of nbconvert to execute and style a Jupyter Notebook [**ECE_Fourth_Year_Opinions.ipynb**](ECE_Fourth_Year_Opinions.ipynb) and output its results into [**index.html**](index.html), which is then hosted onto GitHub Pages and can be viewed from the above link. Other notebooks that are involved in the pipeline include [**setup_notebook.ipynb**](setup_notebook.ipynb), which setups up the environment, helper functions, and adds configurations (mostly Plotly configurations) to the main Jupyter Notebook **ECE_Fourth_Year_Opinions.ipynb**

<img src="tutorial_images/class_profile_title_page.png"> <image src="tutorial_images/class_profile_bar_chart.png">

## Install Dependencies
Before installing dependencies from the following command, create a virtual environment and install
requirements.txt to commence development. Use **Python 3.10** for your virtual environment.
```
pip install -r requirements.txt
```

## Getting Started with Development
Don't worry, plotly development has a low learning-curve! You can also refer to some of the **CODE and HELPER FUNCTIONS** I've already written and to get a feel for how to use them to easily explore data, clean data, and generate different types of visualizations including tables, charts, and even word maps.

Skim both .ipynb notebooks to get an idea of what's possible in Plotly!
<br>
<br>

## Jupyter Notebook to HTML Conversion
Notebook to HTML conversion can be done by running the script jupyter_to_html.sh, using the following command. This command will **EXECIUTE THE ENTIRE NOTEBOOK**
and then generate an HTML output
```
bash /bash/jupyter_to_html.sh
```

If you do not wish the run the entire notebook and only want to generate output HTML based on the current state of the Jupyter Notebook (based on the visualizations you have generated so far), you can run this command. 
```
bash /bash/jupyter_to_html_any_no_execution.sh <name_of_notebook>
```

## Collaborating with Others:
### When you want to work on visualizing a question (for example, plot a bar chart What Is Your Gender?), assign yourself to that column through this spreadsheet so we don't duplicate work:
https://docs.google.com/spreadsheets/d/1Er5QhbmRjqlDy8VP3qVs7yf_IEnPd11_SMl5wWqZkYc/edit#gid=0.
For people in the future working on this survey, use a similar spreadsheet to the one above for collaboration
<br>
<br>

### Hiding Code Cell inputs in Output HTML
All code cell INPUTS are hidden in the output HTML as configured by bash script. For example, in the output html, you will not see any code cells
under the Data Cleaning section header of the Jupyter Notebook
![Data Cleaning](tutorial_images/data_clean.png)

### Hidinng Markdown Cells or Cell Output in Output HTML
There may also be cases where you want to hide Markdown Cells or Cell Output. To do so, add a cell tag "hide_code" to a cell/cell output which you want to hide (In the below example, I assign hide_code to the Data Cleaning markdown because I don't want it in the HTML Output. The cell is used for personal reference)
![GIF portraying the steps required to hide cell from HTML output](tutorial_images/how_to_hide_cell.gif)

### Removing bottom margins
Every cell output has natural bottom margins. To remove bottom margins from a cell output, add a cell tag "no_margin" to the cell containing the output.
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
CSS can be configured by changing [html_template/static/index.css](html_template/static/index.css) and 
[html_template/static/index.html.j2](html_template/static/index.html.j2).
For more info on template customization, see here: https://nbconvert.readthedocs.io/en/5.5.0/customizing.html
and https://nbconvert.readthedocs.io/en/latest/customizing.html

## Plot Style Configuration
Plotly is used for making visualizations in this project. For more on how to use Plotly, read the docs: https://plotly.com/python/getting-started/
and also refer to the notebooks **ECE_Fourth_Year_Opinions.ipynb** and **setup_notebook.ipynb** to learn about how visualizations are
configured and produced.

## Other Concerns
If the output of *pip freeze > requirements.txt* looks weird and contains 
references to local files (For example, Werzkurg @ "file://mydirectory/myinnerdirectory/werzkurg.bin").
Use this command instead to save virtual env dependencies and ignore local references:
```
pip list --format=freeze requirements.txt
```
