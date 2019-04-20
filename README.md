# erep-skills-site
Website to help people recognize problems in their emotional perception &amp; recommend skills to improve their emotional regulation. Designed for Bass Connections research project @ Duke University.

## For future developers:
ebt.html -- At any given time, is displaying a face photo or the happy/angry buttons. 

scripts.js -- ebt.html makes use of scripts.js to hide/reveal the happy/angry buttons and hide/reveal the face photos for each question. Ordering and coding of the face photos shown is specified in the variables section (var ALL_IMAGE_NAMES and var CODINGS). The calculateResults() function is used to calculate the user's performance and redirect them to the appropriate results page.

Results pages -- HO_AB.html for high overall accuracy with an angry bias, HO_HB.html for high overall with happy bias, HO_NB for high overall with no bias. Same abbreviated naming system goes for LO (low overall accuracy). 