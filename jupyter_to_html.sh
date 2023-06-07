jupyter nbconvert --to html --no-input --execute ./ECE_Fourth_Year_Opinions.ipynb --TagRemovePreprocessor.enabled=True \
        --TagRemovePreprocessor.remove_cell_tags hide_code \
        --template html_template
        