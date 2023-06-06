jupyter nbconvert --to html --no-input $1 --TagRemovePreprocessor.enabled=True \
        --TagRemovePreprocessor.remove_cell_tags hide_code \
        --template html_template
        