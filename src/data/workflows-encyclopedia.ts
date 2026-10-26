/**
 * PromptLaz — World Knowledge Encyclopedia Workflows
 * These workflows expand PromptLaz coverage to ALL 54 domain families.
 * Each workflow provides 100% dropdown point-and-click prompt building
 * with 1-click Wikipedia Recipe Blueprints and ELI5 guidance.
 */
import { WorkflowSchema } from '../types';

export const ENCYCLOPEDIA_WORKFLOWS: WorkflowSchema[] = [

  // ═══════════════════════════════════════════════════════════════
  // GROUP 1: KNOWLEDGE & SCIENCE
  // ═══════════════════════════════════════════════════════════════

  // 1. ACADEMIC RESEARCH & LITERATURE REVIEW
  {
    id: 'academic_research_review',
    title: 'Academic Research & Systematic Literature Review',
    domainId: 'research_methods',
    domainName: 'Research and knowledge work',
    group: 'Knowledge & science',
    discipline: 'Research Methodology & Scholarly Communication',
    summary: 'Design systematic reviews, formulate research questions (PICO/SPIDER), structure grant proposals, or outline conference papers with proper methodology.',
    outcome: 'A structured research protocol, grant abstract, or systematic review plan with explicit inclusion criteria, search strategy, and bias assessment.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Research Protocol & Scholarly Outline',
    modality: 'text',
    primaryIntent: 'Research / verify',
    aliases: ['research', 'literature review', 'systematic review', 'meta-analysis', 'grant proposal', 'thesis', 'dissertation', 'academic paper', 'PICO', 'methodology'],
    governingStandards: ['PRISMA 2020', 'Cochrane Handbook', 'APA 7th Edition', 'CONSORT / STROBE Checklists'],
    reviewerRole: 'Senior Academic Research Supervisor',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['research_type', 'research_question_framework'],
      fallbackGuidance: 'If specific research questions are unspecified, the prompt generates a structured brainstorming exercise to narrow the scope.'
    },
    recipes: [
      {
        id: 'systematic_review_protocol',
        title: '📚 PRISMA Systematic Literature Review',
        description: 'Structured protocol with PICO question, database search strategy, and PRISMA flow diagram.',
        badge: 'Systematic Review',
        presetAnswers: {
          research_type: 'systematic_review',
          research_question_framework: 'pico_clinical',
          methodology_approach: 'quantitative_meta',
          database_sources: 'pubmed_scopus_wos',
          bias_assessment: 'cochrane_rob2',
          output_structure: 'protocol_prisma',
          citation_style: 'apa_7th'
        }
      },
      {
        id: 'grant_proposal_abstract',
        title: '💰 Research Grant Proposal Abstract',
        description: 'Compelling 300-word grant abstract with significance, innovation, and approach sections.',
        badge: 'Grant Writing',
        presetAnswers: {
          research_type: 'grant_proposal',
          research_question_framework: 'hypothesis_driven',
          methodology_approach: 'mixed_methods',
          database_sources: 'broad_multidatabase',
          bias_assessment: 'not_applicable_proposal',
          output_structure: 'grant_abstract_nih',
          citation_style: 'apa_7th'
        }
      },
      {
        id: 'conference_paper_outline',
        title: '📄 Conference Paper / Journal Article Outline',
        description: 'IMRaD structured outline with clear hypothesis, methods, results framework.',
        badge: 'Journal Paper',
        presetAnswers: {
          research_type: 'journal_paper',
          research_question_framework: 'hypothesis_driven',
          methodology_approach: 'quantitative_experimental',
          database_sources: 'pubmed_scopus_wos',
          bias_assessment: 'consort_strobe',
          output_structure: 'imrad_outline',
          citation_style: 'vancouver_numbered'
        }
      }
    ],
    fields: [
      {
        id: 'research_type',
        label: 'What type of academic output are you preparing?',
        technicalTerm: 'Research Deliverable Type',
        eli5: 'Are you writing a full review, a grant proposal, or structuring a paper?',
        example: 'Systematic literature review following PRISMA 2020 guidelines',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures the structural template and methodology depth.',
        options: [
          { label: 'Systematic Literature Review (PRISMA flow, inclusion/exclusion criteria)', value: 'systematic_review', isDefault: true },
          { label: 'Narrative / Scoping Review (Broad thematic synthesis)', value: 'scoping_review' },
          { label: 'Research Grant Proposal (NIH/NSF/ERC-style abstract)', value: 'grant_proposal' },
          { label: 'Journal Article / Conference Paper (IMRaD structure)', value: 'journal_paper' },
          { label: 'Thesis / Dissertation Chapter Outline', value: 'thesis_chapter' }
        ]
      },
      {
        id: 'research_question_framework',
        label: 'How is your research question structured?',
        technicalTerm: 'Question Formulation Framework',
        eli5: 'PICO is for clinical studies (Patient, Intervention, Comparison, Outcome). Hypothesis-driven is for experimental research.',
        example: 'PICO: Does intervention X improve outcome Y in population Z compared to control?',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Shapes the analytical framing and variable definitions.',
        options: [
          { label: 'PICO Framework (Clinical / Health Sciences: Patient, Intervention, Comparison, Outcome)', value: 'pico_clinical', isDefault: true },
          { label: 'SPIDER Framework (Qualitative: Sample, Phenomenon, Design, Evaluation, Research type)', value: 'spider_qualitative' },
          { label: 'Hypothesis-Driven Experimental (If X then Y, with controls and variables)', value: 'hypothesis_driven' },
          { label: 'Exploratory / Descriptive (What is the landscape of X? How does Y manifest?)', value: 'exploratory_descriptive' }
        ]
      },
      {
        id: 'methodology_approach',
        label: 'What is your primary research methodology?',
        technicalTerm: 'Epistemological & Methodological Paradigm',
        eli5: 'Quantitative uses numbers and statistics; qualitative uses interviews and themes; mixed uses both.',
        example: 'Quantitative experimental with randomized controlled trial design',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures data collection, analysis, and reporting frameworks.',
        options: [
          { label: 'Quantitative Experimental (RCT, controlled experiment, statistical analysis)', value: 'quantitative_experimental', isDefault: true },
          { label: 'Quantitative Meta-Analysis (Statistical pooling of multiple studies)', value: 'quantitative_meta' },
          { label: 'Qualitative Thematic Analysis (Interviews, focus groups, grounded theory)', value: 'qualitative_thematic' },
          { label: 'Mixed Methods (Sequential or concurrent quantitative + qualitative)', value: 'mixed_methods' },
          { label: 'Computational / In-Silico (Simulation, bioinformatics, ML-based analysis)', value: 'computational' }
        ]
      },
      {
        id: 'database_sources',
        label: 'Which databases and sources should be searched?',
        technicalTerm: 'Literature Search Strategy & Database Selection',
        eli5: 'PubMed covers medicine; Scopus and Web of Science cover broad research; IEEE covers engineering.',
        example: 'PubMed + Scopus + Web of Science with Boolean search strings',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Defines search scope and reproducibility of the review strategy.',
        options: [
          { label: 'PubMed + Scopus + Web of Science (Broad biomedical & multidisciplinary)', value: 'pubmed_scopus_wos', isDefault: true },
          { label: 'IEEE Xplore + ACM Digital Library + arXiv (Engineering & computer science)', value: 'ieee_acm_arxiv' },
          { label: 'JSTOR + Google Scholar + SSRN (Social sciences & humanities)', value: 'jstor_scholar_ssrn' },
          { label: 'Broad multi-database search (6+ databases for comprehensive coverage)', value: 'broad_multidatabase' }
        ]
      },
      {
        id: 'bias_assessment',
        label: 'What risk-of-bias or quality assessment tool should be used?',
        technicalTerm: 'Study Quality & Bias Risk Assessment Instrument',
        eli5: 'These tools help you evaluate whether the studies you include are trustworthy.',
        example: 'Cochrane RoB 2 for randomized trials',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Includes a structured quality assessment in the review protocol.',
        options: [
          { label: 'Cochrane RoB 2 (Risk of Bias for Randomized Trials)', value: 'cochrane_rob2', isDefault: true },
          { label: 'Newcastle-Ottawa Scale (Observational studies: cohort, case-control)', value: 'newcastle_ottawa' },
          { label: 'CONSORT / STROBE Reporting Checklists (Reporting quality assessment)', value: 'consort_strobe' },
          { label: 'Not applicable (Grant proposal or exploratory paper)', value: 'not_applicable_proposal' }
        ]
      },
      {
        id: 'output_structure',
        label: 'What format should the final deliverable follow?',
        technicalTerm: 'Scholarly Output Structure',
        eli5: 'PRISMA for reviews, IMRaD for papers, NIH format for grants.',
        example: 'Full PRISMA 2020 review protocol with flow diagram',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Templates the exact sections and headings of the deliverable.',
        options: [
          { label: 'PRISMA 2020 Review Protocol (Search strategy, PRISMA flow, data extraction)', value: 'protocol_prisma', isDefault: true },
          { label: 'IMRaD Paper Outline (Introduction, Methods, Results, Discussion)', value: 'imrad_outline' },
          { label: 'NIH/NSF Grant Abstract (Significance, Innovation, Approach, Timeline)', value: 'grant_abstract_nih' },
          { label: 'Thesis Chapter Outline (Literature review chapter with thematic sections)', value: 'thesis_chapter_outline' }
        ]
      },
      {
        id: 'citation_style',
        label: 'Which citation and referencing style is required?',
        technicalTerm: 'Bibliographic Citation Standard',
        eli5: 'APA uses author-date; Vancouver uses numbered references; Chicago has footnotes.',
        example: 'APA 7th Edition (Author, Year)',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Formats in-text citations and reference list conventions.',
        options: [
          { label: 'APA 7th Edition (Author, Year) — Psychology, Education, Social Sciences', value: 'apa_7th', isDefault: true },
          { label: 'Vancouver / ICMJE Numbered — Medical & Biomedical journals', value: 'vancouver_numbered' },
          { label: 'IEEE Citation Style — Engineering & Computer Science', value: 'ieee_style' },
          { label: 'Chicago / Turabian (Author-Date or Notes-Bibliography)', value: 'chicago_turabian' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'education_exam_tutor', title: 'Study & Active Recall Tutor', description: 'Practice research concepts with Socratic questioning.' }
    ],
    verificationChecks: [
      { id: 'vc_reproducible', title: 'Search Reproducibility', description: 'Verify the search string and database selection are detailed enough for another researcher to replicate.', category: 'standards' },
      { id: 'vc_bias', title: 'Conflict of Interest Statement', description: 'Ensure prompt includes a note to declare funding sources and conflicts.', category: 'limitations' }
    ]
  },

  // 2. DATA SCIENCE & MACHINE LEARNING
  {
    id: 'data_science_ml',
    title: 'Data Science & Machine Learning Pipeline',
    domainId: 'ai_data_analytics',
    domainName: 'Data science, ML and AI',
    group: 'Technology & engineering',
    discipline: 'Machine Learning & Applied AI',
    summary: 'Design ML pipelines end-to-end: problem framing, feature engineering, model selection, evaluation metrics, and deployment strategy.',
    outcome: 'A structured ML project brief with clear problem definition, baseline metrics, evaluation plan, and ethical considerations.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'ML Pipeline Design & Experiment Brief',
    modality: 'code',
    primaryIntent: 'Create / design',
    aliases: ['machine learning', 'data science', 'AI', 'deep learning', 'neural network', 'classification', 'regression', 'NLP', 'computer vision', 'model training', 'feature engineering', 'scikit-learn', 'pytorch', 'tensorflow'],
    governingStandards: ['Google ML Best Practices', 'Model Cards for Model Reporting', 'EU AI Act Risk Classification'],
    reviewerRole: 'Senior ML Engineer / Data Science Lead',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['problem_type', 'data_description'],
      fallbackGuidance: 'If dataset details are unknown, prompt generates a data requirements specification and exploratory data analysis (EDA) checklist.'
    },
    recipes: [
      {
        id: 'ml_tabular_classification',
        title: '📊 Tabular Classification Pipeline (XGBoost)',
        description: 'End-to-end churn prediction with feature engineering, class imbalance handling, and SHAP explainability.',
        badge: 'Tabular ML',
        presetAnswers: {
          problem_type: 'supervised_classification',
          data_description: 'tabular_structured',
          model_architecture: 'gradient_boosting',
          evaluation_metrics: 'precision_recall_auc',
          deployment_target: 'batch_inference',
          ethical_considerations: 'fairness_audit'
        }
      },
      {
        id: 'ml_nlp_sentiment',
        title: '💬 NLP Sentiment Analysis Fine-Tune',
        description: 'Fine-tune a transformer model on domain-specific text with few-shot learning and evaluation.',
        badge: 'NLP & Text',
        presetAnswers: {
          problem_type: 'supervised_classification',
          data_description: 'text_unstructured',
          model_architecture: 'transformer_finetuned',
          evaluation_metrics: 'f1_macro_confusion',
          deployment_target: 'api_realtime',
          ethical_considerations: 'bias_language'
        }
      },
      {
        id: 'ml_cv_detection',
        title: '📷 Computer Vision Object Detection',
        description: 'YOLO/DETR object detection pipeline with data augmentation strategy and mAP evaluation.',
        badge: 'Computer Vision',
        presetAnswers: {
          problem_type: 'object_detection',
          data_description: 'image_labeled',
          model_architecture: 'cnn_detection',
          evaluation_metrics: 'map_iou',
          deployment_target: 'edge_device',
          ethical_considerations: 'privacy_faces'
        }
      }
    ],
    fields: [
      {
        id: 'problem_type',
        label: 'What type of ML problem are you solving?',
        technicalTerm: 'Learning Paradigm & Task Type',
        eli5: 'Classification predicts categories; regression predicts numbers; clustering finds groups; detection finds objects in images.',
        example: 'Supervised binary classification (e.g., churn vs retain)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Determines the loss function, evaluation metrics, and model selection.',
        options: [
          { label: 'Supervised Classification (Binary or multi-class: spam/not-spam, disease diagnosis)', value: 'supervised_classification', isDefault: true },
          { label: 'Supervised Regression (Predict continuous value: house price, demand forecast)', value: 'supervised_regression' },
          { label: 'Object Detection (Locate and classify objects in images: YOLO, DETR)', value: 'object_detection' },
          { label: 'Unsupervised Clustering (Find natural groups: customer segmentation, anomaly)', value: 'unsupervised_clustering' },
          { label: 'Generative / LLM Fine-Tuning (Text generation, summarization, chat)', value: 'generative_llm' },
          { label: 'Time Series Forecasting (Predict future values: sales, temperature, stock)', value: 'time_series' }
        ]
      },
      {
        id: 'data_description',
        label: 'What type of data do you have?',
        technicalTerm: 'Data Modality & Structure',
        eli5: 'Tabular = spreadsheets with rows and columns; Text = documents, reviews; Images = photos, medical scans.',
        example: '50k rows of structured tabular data with 30 numeric and categorical features',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Selects preprocessing pipeline, feature engineering approach, and data loaders.',
        options: [
          { label: 'Tabular / Structured Data (CSV, database tables, numeric + categorical columns)', value: 'tabular_structured', isDefault: true },
          { label: 'Text / NLP Corpus (Reviews, documents, chat logs, clinical notes)', value: 'text_unstructured' },
          { label: 'Images (Labeled photos, medical scans, satellite imagery)', value: 'image_labeled' },
          { label: 'Time Series Sequences (Sensor data, financial ticks, IoT streams)', value: 'time_series_seq' },
          { label: 'Multi-Modal (Images + text + tabular combined)', value: 'multimodal' }
        ]
      },
      {
        id: 'model_architecture',
        label: 'What model architecture or algorithm family should be used?',
        technicalTerm: 'Model Selection & Architecture Strategy',
        eli5: 'Gradient boosting (XGBoost) is best for tabular; Transformers are best for text; CNNs are best for images.',
        example: 'XGBoost with hyperparameter tuning via Optuna',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures the model training code structure and hyperparameter search space.',
        options: [
          { label: 'Gradient Boosting (XGBoost / LightGBM / CatBoost — best for tabular)', value: 'gradient_boosting', isDefault: true },
          { label: 'Transformer Fine-Tune (BERT / RoBERTa / GPT — best for text NLP)', value: 'transformer_finetuned' },
          { label: 'CNN / Vision Model (ResNet / EfficientNet / YOLO — best for images)', value: 'cnn_detection' },
          { label: 'Linear / Logistic Baseline (Simple interpretable baseline)', value: 'linear_baseline' },
          { label: 'Random Forest + Feature Importance (Interpretable ensemble)', value: 'random_forest' }
        ]
      },
      {
        id: 'evaluation_metrics',
        label: 'What evaluation metrics should be reported?',
        technicalTerm: 'Performance Evaluation & Benchmark Metrics',
        eli5: 'Accuracy alone can be misleading with imbalanced data. Use precision/recall for classification; RMSE for regression.',
        example: 'Precision, Recall, F1-Score, AUC-ROC with confusion matrix',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Structures the evaluation section and comparison tables.',
        options: [
          { label: 'Precision, Recall, F1-Score + AUC-ROC (Classification with class imbalance)', value: 'precision_recall_auc', isDefault: true },
          { label: 'F1-Macro + Confusion Matrix (Multi-class classification fairness)', value: 'f1_macro_confusion' },
          { label: 'mAP@0.5 / mAP@0.5:0.95 + IoU (Object detection standard)', value: 'map_iou' },
          { label: 'RMSE, MAE, R² (Regression error metrics)', value: 'rmse_mae_r2' },
          { label: 'BLEU, ROUGE, Perplexity (Text generation quality)', value: 'bleu_rouge' }
        ]
      },
      {
        id: 'deployment_target',
        label: 'Where will this model be deployed?',
        technicalTerm: 'Inference Serving & Deployment Environment',
        eli5: 'Will the model run in real-time via API, as a batch job overnight, or on a mobile/edge device?',
        example: 'Real-time REST API behind a load balancer with <100ms latency SLA',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Adds deployment architecture constraints and latency/throughput requirements.',
        options: [
          { label: 'REST API Real-Time Inference (<100ms latency SLA)', value: 'api_realtime', isDefault: true },
          { label: 'Batch Inference Pipeline (Nightly scoring of millions of records)', value: 'batch_inference' },
          { label: 'Edge / Mobile Device (ONNX, TFLite, model compression)', value: 'edge_device' },
          { label: 'Research / Notebook Only (No production deployment needed)', value: 'research_notebook' }
        ]
      },
      {
        id: 'ethical_considerations',
        label: 'What ethical and fairness considerations apply?',
        technicalTerm: 'Responsible AI & Fairness Audit',
        eli5: 'Should the model be checked for bias against protected groups, or are there privacy concerns with the data?',
        example: 'Fairness audit across gender and age demographics with disparate impact analysis',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Adds a responsible AI section with bias mitigation and model card documentation.',
        options: [
          { label: 'Fairness Audit (Check for bias across protected demographic groups)', value: 'fairness_audit', isDefault: true },
          { label: 'Language & Cultural Bias Review (Toxicity, stereotypes in text models)', value: 'bias_language' },
          { label: 'Privacy & PII Protection (Face detection consent, data anonymization)', value: 'privacy_faces' },
          { label: 'EU AI Act High-Risk Assessment (Regulatory compliance check)', value: 'eu_ai_act' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'computing_qa_testing', title: 'ML Pipeline Testing Strategy', description: 'Test data pipelines and model inference endpoints.' }
    ],
    verificationChecks: [
      { id: 'vc_data_leakage', title: 'Train/Test Data Leakage Check', description: 'Verify that no future-looking or target-derived features leak into training data.', category: 'assumptions' },
      { id: 'vc_baseline', title: 'Baseline Comparison Required', description: 'Ensure a simple baseline (e.g., majority class, mean prediction) is always compared against.', category: 'evidence' }
    ]
  },

  // 3. MARKETING & CONTENT STRATEGY
  {
    id: 'marketing_content_strategy',
    title: 'Marketing Campaign & Content Strategy',
    domainId: 'marketing_sales',
    domainName: 'Marketing, sales and advertising',
    group: 'Economy & work',
    discipline: 'Digital Marketing & Growth Strategy',
    summary: 'Plan complete marketing campaigns: buyer personas, channel mix, content calendars, ad copy, email sequences, and KPI dashboards.',
    outcome: 'A ready-to-execute marketing brief with audience targeting, messaging framework, content plan, and measurable KPIs.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Marketing Campaign Brief & Content Plan',
    modality: 'text',
    primaryIntent: 'Plan / schedule',
    aliases: ['marketing', 'content strategy', 'SEO', 'social media', 'ad copy', 'email campaign', 'brand', 'growth hacking', 'digital marketing', 'copywriting', 'landing page', 'funnel'],
    governingStandards: ['AIDA Framework', 'StoryBrand Messaging', 'Google Ads Quality Score Guidelines'],
    reviewerRole: 'VP Marketing / Growth Lead',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['campaign_objective', 'target_audience'],
      fallbackGuidance: 'If target audience is unclear, prompt generates a buyer persona discovery workshop outline.'
    },
    recipes: [
      {
        id: 'mktg_saas_launch',
        title: '🚀 B2B SaaS Product Launch Campaign',
        description: 'Full-stack launch with landing page copy, email drip sequence, LinkedIn ads, and PR pitch.',
        badge: 'SaaS Launch',
        presetAnswers: {
          campaign_objective: 'product_launch',
          target_audience: 'b2b_decision_makers',
          channel_mix: 'linkedin_email_content',
          content_format: 'multi_asset_campaign',
          budget_tier: 'mid_5k_20k',
          kpi_metrics: 'pipeline_mqls'
        }
      },
      {
        id: 'mktg_ecommerce_sale',
        title: '🛒 E-Commerce Holiday Sale Funnel',
        description: 'Black Friday/seasonal campaign with urgency copy, retargeting ads, and abandoned cart recovery.',
        badge: 'E-Commerce',
        presetAnswers: {
          campaign_objective: 'revenue_conversion',
          target_audience: 'dtc_consumers',
          channel_mix: 'meta_google_email',
          content_format: 'ad_copy_variants',
          budget_tier: 'high_20k_plus',
          kpi_metrics: 'roas_conversion'
        }
      },
      {
        id: 'mktg_thought_leadership',
        title: '📝 B2B Thought Leadership Content Series',
        description: 'LinkedIn article series establishing expertise with SEO-optimized long-form content.',
        badge: 'Content Marketing',
        presetAnswers: {
          campaign_objective: 'brand_awareness',
          target_audience: 'b2b_decision_makers',
          channel_mix: 'organic_seo_social',
          content_format: 'longform_articles',
          budget_tier: 'bootstrap_organic',
          kpi_metrics: 'engagement_shares'
        }
      }
    ],
    fields: [
      {
        id: 'campaign_objective',
        label: 'What is the primary marketing objective?',
        technicalTerm: 'Campaign Goal & Funnel Stage',
        eli5: 'Are you launching a new product, driving sales, building brand awareness, or nurturing leads?',
        example: 'Product launch campaign to drive 500 qualified signups in 30 days',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Sets the campaign funnel stage and success criteria.',
        options: [
          { label: 'Product Launch (Drive awareness and initial signups for a new product)', value: 'product_launch', isDefault: true },
          { label: 'Revenue & Conversion (Direct sales, purchases, subscription upgrades)', value: 'revenue_conversion' },
          { label: 'Brand Awareness & Authority (Thought leadership, PR, organic reach)', value: 'brand_awareness' },
          { label: 'Lead Nurturing & Email Sequence (Move prospects down the funnel)', value: 'lead_nurture' },
          { label: 'Community Building & Engagement (Social following, user-generated content)', value: 'community_growth' }
        ]
      },
      {
        id: 'target_audience',
        label: 'Who is the target audience persona?',
        technicalTerm: 'Ideal Customer Profile (ICP) & Buyer Persona',
        eli5: 'Who are you trying to reach? Business decision-makers, tech developers, or everyday consumers?',
        example: 'B2B SaaS buyers: VP Engineering at 50-500 employee tech companies',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Tailors messaging, channel selection, and content tone.',
        options: [
          { label: 'B2B Decision Makers (VP/Director/C-Suite buying enterprise software or services)', value: 'b2b_decision_makers', isDefault: true },
          { label: 'Software Developers & Technical Users (DevTool, API, open-source audience)', value: 'developer_technical' },
          { label: 'Direct-to-Consumer (D2C lifestyle, health, fashion, food shoppers)', value: 'dtc_consumers' },
          { label: 'Small Business Owners & Freelancers (Budget-conscious, self-serve tools)', value: 'smb_freelancers' },
          { label: 'Students & Early-Career Professionals (Education, upskilling, career growth)', value: 'students_early_career' }
        ]
      },
      {
        id: 'channel_mix',
        label: 'What marketing channels will be used?',
        technicalTerm: 'Distribution Channel Strategy',
        eli5: 'Where will your audience see your campaign? LinkedIn, Google Ads, email, TikTok, or organic search?',
        example: 'LinkedIn Sponsored Posts + Email Drip + Blog Content Marketing',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Generates channel-specific copy variants and creative requirements.',
        options: [
          { label: 'LinkedIn + Email + Content Marketing (B2B professional channels)', value: 'linkedin_email_content', isDefault: true },
          { label: 'Meta (Facebook/Instagram) + Google Ads + Email (D2C paid acquisition)', value: 'meta_google_email' },
          { label: 'Organic SEO + Social Media + Community (Zero-budget growth)', value: 'organic_seo_social' },
          { label: 'YouTube + TikTok + Influencer Partnerships (Video-first awareness)', value: 'video_influencer' },
          { label: 'Product Hunt + Hacker News + Developer Communities (Dev/startup launch)', value: 'dev_community_launch' }
        ]
      },
      {
        id: 'content_format',
        label: 'What type of content assets do you need?',
        technicalTerm: 'Creative Asset & Content Type Specification',
        eli5: 'Do you need ad copy, blog articles, email sequences, or a full multi-asset campaign?',
        example: 'Full campaign: landing page copy + 5 email drips + 3 ad variants',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Templates the specific deliverable sections and word counts.',
        options: [
          { label: 'Multi-Asset Campaign Pack (Landing page + emails + ad copy + social posts)', value: 'multi_asset_campaign', isDefault: true },
          { label: 'Ad Copy Variants (3-5 headline/body combinations for A/B testing)', value: 'ad_copy_variants' },
          { label: 'Long-Form SEO Articles (1500-3000 word blog posts with keyword targeting)', value: 'longform_articles' },
          { label: 'Email Drip Sequence (5-7 nurture emails with subject line variants)', value: 'email_drip' },
          { label: 'Social Media Content Calendar (30-day posting schedule with copy)', value: 'social_calendar' }
        ]
      },
      {
        id: 'budget_tier',
        label: 'What is the approximate marketing budget?',
        technicalTerm: 'Campaign Budget & Spend Allocation',
        eli5: 'Budget determines whether to focus on paid ads, organic content, or a mix.',
        example: '$5K-20K monthly for paid + content mix',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Adjusts channel allocation recommendations and ROI projections.',
        options: [
          { label: 'Bootstrap / Organic Only ($0-$500/month, sweat equity focus)', value: 'bootstrap_organic', isDefault: true },
          { label: 'Seed Stage ($500-$5K/month, selective paid experiments)', value: 'seed_500_5k' },
          { label: 'Growth Stage ($5K-$20K/month, multi-channel paid + content)', value: 'mid_5k_20k' },
          { label: 'Scale Stage ($20K+/month, full-funnel paid acquisition)', value: 'high_20k_plus' }
        ]
      },
      {
        id: 'kpi_metrics',
        label: 'What are the primary success metrics?',
        technicalTerm: 'Key Performance Indicators (KPIs)',
        eli5: 'How will you measure if the campaign worked? Signups, revenue, engagement, or brand awareness?',
        example: 'Marketing Qualified Leads (MQLs) and pipeline revenue influenced',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Adds a measurement framework and dashboard specification.',
        options: [
          { label: 'Pipeline & MQLs (Marketing Qualified Leads → Sales pipeline influenced)', value: 'pipeline_mqls', isDefault: true },
          { label: 'ROAS & Conversion Rate (Return on Ad Spend, cost per acquisition)', value: 'roas_conversion' },
          { label: 'Engagement & Social Shares (Impressions, clicks, shares, comments)', value: 'engagement_shares' },
          { label: 'SEO Rankings & Organic Traffic (Keyword positions, organic sessions)', value: 'seo_organic' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'business_startup_prd', title: 'Startup PRD & Go-to-Market', description: 'Connect product features to marketing positioning.' }
    ],
    verificationChecks: [
      { id: 'vc_compliance', title: 'Ad Platform Compliance', description: 'Verify ad copy complies with platform policies (no misleading claims, proper disclaimers).', category: 'standards' },
      { id: 'vc_attribution', title: 'Attribution Model Clarity', description: 'Ensure the KPI framework specifies the attribution model (first-touch, multi-touch, etc.).', category: 'evidence' }
    ]
  },

  // 4. LEGAL & COMPLIANCE ANALYSIS
  {
    id: 'legal_compliance_review',
    title: 'Legal Document Analysis & Compliance Review',
    domainId: 'law_governance',
    domainName: 'Law, regulation and compliance',
    group: 'Society, law & culture',
    discipline: 'Legal Analysis & Regulatory Compliance',
    summary: 'Analyze contracts, assess regulatory compliance (GDPR, SOC 2, HIPAA), draft legal summaries, or prepare due diligence checklists.',
    outcome: 'A structured legal analysis brief with risk flags, compliance gaps, recommended actions, and explicit non-advice disclaimers.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Legal Analysis & Compliance Assessment',
    modality: 'text',
    primaryIntent: 'Review / audit',
    aliases: ['legal', 'contract', 'compliance', 'GDPR', 'privacy', 'terms of service', 'NDA', 'due diligence', 'regulatory', 'patent', 'intellectual property', 'employment law'],
    governingStandards: ['GDPR (EU 2016/679)', 'SOC 2 Type II', 'HIPAA Privacy Rule', 'ICC Incoterms 2020'],
    reviewerRole: 'Licensed Attorney / Compliance Officer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['document_type', 'jurisdiction'],
      fallbackGuidance: 'If jurisdiction is unspecified, the prompt defaults to general common law principles with a clear disclaimer to consult local counsel.'
    },
    recipes: [
      {
        id: 'legal_contract_review',
        title: '📋 Employment Contract Risk Review',
        description: 'Flag unfavorable clauses in employment agreements: non-compete, IP assignment, severance.',
        badge: 'Employment Law',
        presetAnswers: {
          document_type: 'employment_contract',
          jurisdiction: 'us_state_law',
          analysis_focus: 'risk_flags',
          compliance_framework: 'employment_labor',
          party_perspective: 'employee_individual',
          output_format: 'clause_analysis'
        }
      },
      {
        id: 'legal_gdpr_dpia',
        title: '🔒 GDPR Data Protection Impact Assessment',
        description: 'Assess data processing lawfulness, identify risks, and recommend mitigation measures.',
        badge: 'GDPR Privacy',
        presetAnswers: {
          document_type: 'privacy_policy',
          jurisdiction: 'eu_gdpr',
          analysis_focus: 'compliance_gaps',
          compliance_framework: 'gdpr_privacy',
          party_perspective: 'data_controller',
          output_format: 'compliance_checklist'
        }
      },
      {
        id: 'legal_ma_diligence',
        title: '🏢 M&A Due Diligence Checklist',
        description: 'Comprehensive acquisition due diligence covering corporate, IP, contracts, litigation, and tax.',
        badge: 'M&A Diligence',
        presetAnswers: {
          document_type: 'corporate_governance',
          jurisdiction: 'us_federal',
          analysis_focus: 'due_diligence',
          compliance_framework: 'corporate_securities',
          party_perspective: 'acquiring_company',
          output_format: 'due_diligence_checklist'
        }
      }
    ],
    fields: [
      {
        id: 'document_type',
        label: 'What type of legal document or matter is this?',
        technicalTerm: 'Legal Document Classification',
        eli5: 'Is this a contract you want reviewed, a privacy policy, corporate governance docs, or a regulatory filing?',
        example: 'Employment contract with non-compete and IP assignment clauses',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Selects the relevant legal framework and clause analysis patterns.',
        options: [
          { label: 'Employment Contract / Offer Letter (Non-compete, benefits, IP assignment)', value: 'employment_contract', isDefault: true },
          { label: 'Commercial / Vendor Agreement (SaaS terms, licensing, SLA, liability caps)', value: 'commercial_agreement' },
          { label: 'Privacy Policy / Data Processing Agreement (GDPR, CCPA, cookies)', value: 'privacy_policy' },
          { label: 'Corporate Governance Documents (Shareholder agreement, bylaws, board resolutions)', value: 'corporate_governance' },
          { label: 'Intellectual Property (Patent filing, trademark application, copyright license)', value: 'intellectual_property' },
          { label: 'Lease / Real Estate Agreement (Commercial lease, property purchase terms)', value: 'real_estate_lease' }
        ]
      },
      {
        id: 'jurisdiction',
        label: 'What legal jurisdiction applies?',
        technicalTerm: 'Governing Law & Jurisdictional Scope',
        eli5: 'Laws vary by country and state. US employment law differs from EU/UK law significantly.',
        example: 'United States, State of California (at-will employment, CCPA)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Grounds legal analysis in the correct statutory and case law framework.',
        options: [
          { label: 'United States — State Law (California, New York, Texas, etc.)', value: 'us_state_law', isDefault: true },
          { label: 'United States — Federal Law (SEC, FTC, federal employment law)', value: 'us_federal' },
          { label: 'European Union — GDPR & EU Directives', value: 'eu_gdpr' },
          { label: 'United Kingdom — Post-Brexit English Law', value: 'uk_english_law' },
          { label: 'India — Indian Contract Act & IT Act', value: 'india_contract_it' },
          { label: 'General Common Law Principles (Multi-jurisdictional or uncertain)', value: 'general_common_law' }
        ]
      },
      {
        id: 'analysis_focus',
        label: 'What kind of analysis do you need?',
        technicalTerm: 'Legal Analysis Objective',
        eli5: 'Do you want risk flags in a contract, a compliance gap analysis, or a full due diligence investigation?',
        example: 'Risk flag review: identify unfavorable clauses and missing protections',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures the depth and structure of the legal analysis.',
        options: [
          { label: 'Risk Flag Review (Identify unfavorable clauses, missing protections, red flags)', value: 'risk_flags', isDefault: true },
          { label: 'Compliance Gap Analysis (Check against regulatory framework, identify gaps)', value: 'compliance_gaps' },
          { label: 'Due Diligence Investigation (Comprehensive M&A or investment review)', value: 'due_diligence' },
          { label: 'Plain-Language Summary (Translate legalese into understandable terms)', value: 'plain_language' }
        ]
      },
      {
        id: 'compliance_framework',
        label: 'Which compliance or regulatory framework applies?',
        technicalTerm: 'Regulatory Compliance Standard',
        eli5: 'GDPR for data privacy in Europe; SOC 2 for cloud security; HIPAA for healthcare data.',
        example: 'GDPR (General Data Protection Regulation)',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Applies specific regulatory checklists and compliance criteria.',
        options: [
          { label: 'GDPR / Data Privacy (EU data protection, consent, data subject rights)', value: 'gdpr_privacy', isDefault: true },
          { label: 'Employment & Labor Law (At-will, discrimination, wage/hour, non-compete)', value: 'employment_labor' },
          { label: 'Corporate & Securities (SEC filings, board fiduciary duties, insider trading)', value: 'corporate_securities' },
          { label: 'SOC 2 / ISO 27001 (Information security and cloud service compliance)', value: 'soc2_infosec' },
          { label: 'HIPAA (Healthcare data privacy and security)', value: 'hipaa_healthcare' }
        ]
      },
      {
        id: 'party_perspective',
        label: 'From whose perspective should the analysis be done?',
        technicalTerm: 'Party Interest & Advocacy Position',
        eli5: 'Are you the employee reviewing a contract, the company drafting it, or a neutral auditor?',
        example: 'Employee / individual (identify clauses that are unfavorable to me)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Orients the risk assessment toward the relevant party interests.',
        options: [
          { label: 'Employee / Individual (Review from the perspective of the signing employee)', value: 'employee_individual', isDefault: true },
          { label: 'Company / Employer (Review from the perspective of the hiring company)', value: 'company_employer' },
          { label: 'Data Controller / Processor (GDPR data handling perspective)', value: 'data_controller' },
          { label: 'Acquiring Company (M&A buyer due diligence perspective)', value: 'acquiring_company' },
          { label: 'Neutral Auditor (Objective compliance audit without advocacy)', value: 'neutral_auditor' }
        ]
      },
      {
        id: 'output_format',
        label: 'What format should the legal analysis take?',
        technicalTerm: 'Legal Deliverable Structure',
        eli5: 'A clause-by-clause analysis, a compliance checklist, or a plain-language executive summary?',
        example: 'Clause-by-clause risk analysis with severity ratings',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Structures the output format and sections.',
        options: [
          { label: 'Clause-by-Clause Analysis (Each clause rated: Favorable / Neutral / Unfavorable)', value: 'clause_analysis', isDefault: true },
          { label: 'Compliance Checklist (Pass/Fail/Partial for each regulatory requirement)', value: 'compliance_checklist' },
          { label: 'Due Diligence Checklist (Comprehensive category-by-category investigation)', value: 'due_diligence_checklist' },
          { label: 'Executive Summary Memo (1-page plain-language risk overview for leadership)', value: 'executive_memo' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'universal_builder', title: 'General Business Correspondence', description: 'Draft legal-adjacent business communications.' }
    ],
    verificationChecks: [
      { id: 'vc_not_advice', title: 'Not Legal Advice Disclaimer', description: 'Prompt MUST include: "This is an educational analysis tool and does not constitute legal advice. Consult a licensed attorney."', category: 'limitations' },
      { id: 'vc_jurisdiction', title: 'Jurisdiction Specificity', description: 'Verify that the analysis correctly references the applicable jurisdiction and does not mix legal systems.', category: 'standards' }
    ]
  },

  // 5. MEDICAL & HEALTHCARE RESEARCH
  {
    id: 'medical_clinical_research',
    title: 'Medical & Healthcare Clinical Research',
    domainId: 'medicine_health',
    domainName: 'Medicine, nursing, pharmacy and allied health',
    group: 'Health, food & living things',
    discipline: 'Clinical Medicine & Health Sciences',
    summary: 'Structure clinical case presentations, differential diagnosis workups, patient education materials, or evidence-based clinical guideline summaries.',
    outcome: 'A structured clinical analysis with differential diagnosis, evidence grading, and explicit non-diagnostic disclaimers.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Clinical Case Analysis & Evidence Summary',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ['medical', 'clinical', 'diagnosis', 'healthcare', 'patient', 'symptoms', 'treatment', 'pathology', 'pharmacology', 'nursing', 'evidence-based medicine'],
    governingStandards: ['GRADE Evidence Framework', 'SOAP Note Standard', 'ICD-11 Classification', 'UpToDate / Cochrane Library'],
    reviewerRole: 'Licensed Physician (MD/DO) / Clinical Specialist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['clinical_task', 'medical_specialty'],
      fallbackGuidance: 'If clinical details are insufficient, prompt generates a structured history-taking template instead of guessing diagnoses.'
    },
    recipes: [
      {
        id: 'med_differential_dx',
        title: '🩺 Differential Diagnosis Workup',
        description: 'Structured differential with red flags, must-not-miss diagnoses, and investigation priority.',
        badge: 'Clinical Diagnosis',
        presetAnswers: {
          clinical_task: 'differential_diagnosis',
          medical_specialty: 'internal_medicine',
          patient_context: 'adult_outpatient',
          evidence_level: 'grade_evidence',
          output_type: 'clinical_assessment',
          safety_guardrail: 'educational_not_diagnostic'
        }
      },
      {
        id: 'med_patient_education',
        title: '📖 Patient Education Handout',
        description: 'Plain-language handout explaining a condition, treatment options, and self-care instructions.',
        badge: 'Patient Education',
        presetAnswers: {
          clinical_task: 'patient_education',
          medical_specialty: 'family_medicine',
          patient_context: 'adult_outpatient',
          evidence_level: 'guideline_summary',
          output_type: 'patient_handout',
          safety_guardrail: 'educational_not_diagnostic'
        }
      },
      {
        id: 'med_guideline_summary',
        title: '📋 Clinical Guideline Evidence Summary',
        description: 'Synthesize current guidelines (AHA, NICE, WHO) into a decision-support reference card.',
        badge: 'Evidence-Based Medicine',
        presetAnswers: {
          clinical_task: 'guideline_review',
          medical_specialty: 'cardiology',
          patient_context: 'hospital_inpatient',
          evidence_level: 'grade_evidence',
          output_type: 'guideline_card',
          safety_guardrail: 'educational_not_diagnostic'
        }
      }
    ],
    fields: [
      {
        id: 'clinical_task',
        label: 'What type of clinical analysis are you preparing?',
        technicalTerm: 'Clinical Task Type',
        eli5: 'Are you working through a differential diagnosis, preparing patient education, or reviewing clinical guidelines?',
        example: 'Differential diagnosis workup for chest pain presentation',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Sets the clinical reasoning framework and output structure.',
        options: [
          { label: 'Differential Diagnosis Workup (Systematic rule-in/rule-out with red flags)', value: 'differential_diagnosis', isDefault: true },
          { label: 'Patient Education Material (Plain-language condition explanation)', value: 'patient_education' },
          { label: 'Clinical Guideline Review (Synthesize current evidence-based guidelines)', value: 'guideline_review' },
          { label: 'SOAP Note Template (Subjective, Objective, Assessment, Plan)', value: 'soap_note' },
          { label: 'Drug Interaction & Pharmacology Check (Medication safety review)', value: 'drug_interaction' }
        ]
      },
      {
        id: 'medical_specialty',
        label: 'What medical specialty or system is involved?',
        technicalTerm: 'Clinical Specialty & Organ System',
        eli5: 'Which area of medicine does this case involve?',
        example: 'Internal Medicine — Cardiology (chest pain, dyspnea, arrhythmia)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Loads specialty-specific differential lists, guidelines, and investigation protocols.',
        options: [
          { label: 'Internal Medicine / General Adult Medicine', value: 'internal_medicine', isDefault: true },
          { label: 'Cardiology (Heart, circulation, ECG interpretation)', value: 'cardiology' },
          { label: 'Family Medicine / Primary Care (Broad general practice)', value: 'family_medicine' },
          { label: 'Orthopedics & Musculoskeletal (Bones, joints, sports injuries)', value: 'orthopedics' },
          { label: 'Psychiatry & Mental Health (Depression, anxiety, psychopharmacology)', value: 'psychiatry' },
          { label: 'Emergency Medicine (Acute presentations, trauma, resuscitation)', value: 'emergency_medicine' }
        ]
      },
      {
        id: 'patient_context',
        label: 'What is the patient population and care setting?',
        technicalTerm: 'Patient Demographics & Care Setting',
        eli5: 'Is this an adult outpatient visit, a hospitalized patient, or a pediatric case?',
        example: 'Adult outpatient, age 45-65, primary care clinic',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Adjusts age-specific differentials, dosing considerations, and care pathways.',
        options: [
          { label: 'Adult Outpatient (Ambulatory clinic, age 18-65)', value: 'adult_outpatient', isDefault: true },
          { label: 'Hospital Inpatient (Admitted patient, acute care ward)', value: 'hospital_inpatient' },
          { label: 'Geriatric Patient (Age 65+, polypharmacy, frailty considerations)', value: 'geriatric' },
          { label: 'Pediatric Patient (Infant to adolescent, weight-based dosing)', value: 'pediatric' },
          { label: 'Obstetric / Pregnancy-Related (Teratogenicity, gestational conditions)', value: 'obstetric' }
        ]
      },
      {
        id: 'evidence_level',
        label: 'What level of evidence depth is needed?',
        technicalTerm: 'Evidence Grading & Source Quality',
        eli5: 'Do you want a quick clinical overview or a deep evidence-graded analysis with cited guidelines?',
        example: 'GRADE evidence framework with strength of recommendation',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Controls the depth of evidence citation and recommendation strength.',
        options: [
          { label: 'GRADE Evidence Framework (Strong/Weak recommendations, High/Low quality)', value: 'grade_evidence', isDefault: true },
          { label: 'Clinical Guideline Summary (Reference AHA, NICE, WHO, UpToDate)', value: 'guideline_summary' },
          { label: 'Quick Clinical Reference (Concise bedside decision-support card)', value: 'quick_reference' }
        ]
      },
      {
        id: 'output_type',
        label: 'What format should the clinical output take?',
        technicalTerm: 'Clinical Document Format',
        eli5: 'A structured assessment, a patient-friendly handout, or a clinical reference card?',
        example: 'Clinical assessment with ranked differentials and investigation plan',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Templates the sections and reading level of the output.',
        options: [
          { label: 'Clinical Assessment & Investigation Plan (Ranked differentials, workup order)', value: 'clinical_assessment', isDefault: true },
          { label: 'Patient Education Handout (6th-grade reading level, action steps)', value: 'patient_handout' },
          { label: 'Clinical Guideline Quick-Reference Card (Pocket-sized decision aid)', value: 'guideline_card' },
          { label: 'Case Presentation for Teaching (Medical student/resident education)', value: 'teaching_case' }
        ]
      },
      {
        id: 'safety_guardrail',
        label: 'What safety disclaimer applies?',
        technicalTerm: 'Clinical AI Safety Guardrail',
        eli5: 'AI MUST NOT diagnose or prescribe. This is always for educational and learning purposes only.',
        example: 'Educational analysis only — not a substitute for professional medical advice',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Adds mandatory safety disclaimers and scope limitations.',
        options: [
          { label: 'Educational Only — NOT a diagnosis or prescription (Mandatory safety disclaimer)', value: 'educational_not_diagnostic', isDefault: true }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'academic_research_review', title: 'Clinical Research Protocol', description: 'Design a clinical trial or systematic review protocol.' }
    ],
    verificationChecks: [
      { id: 'vc_not_diagnosis', title: 'Non-Diagnostic Guardrail', description: 'Prompt MUST include: "This is an educational exercise. It does NOT constitute medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider."', category: 'limitations' },
      { id: 'vc_red_flags', title: 'Red Flag Identification', description: 'Ensure must-not-miss emergency diagnoses are explicitly called out.', category: 'evidence' }
    ]
  },

  // 6. CREATIVE WRITING & COPYWRITING
  {
    id: 'creative_writing_copy',
    title: 'Creative Writing, Copywriting & Content Creation',
    domainId: 'languages_writing',
    domainName: 'Linguistics, translation and communication',
    group: 'Society, law & culture',
    discipline: 'Creative Writing & Professional Copywriting',
    summary: 'Craft blog posts, brand narratives, product descriptions, email sequences, social captions, or long-form creative fiction with precise tone and structure.',
    outcome: 'Publication-ready written content with clear voice, audience targeting, SEO structure, and call-to-action framing.',
    skillLevel: 'Beginner',
    riskClass: 'R0',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Written Content & Copy Assets',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['writing', 'copywriting', 'blog post', 'content creation', 'storytelling', 'email copy', 'social media caption', 'product description', 'creative fiction', 'ghostwriting'],
    governingStandards: ['AP Stylebook', 'Google E-E-A-T Guidelines', 'Hemingway Readability Score'],
    reviewerRole: 'Senior Content Strategist / Editor-in-Chief',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['content_type', 'target_reader'],
      fallbackGuidance: 'If audience is unclear, prompt generates a reader persona brainstorm before writing.'
    },
    recipes: [
      {
        id: 'writing_seo_blog',
        title: '📝 SEO-Optimized Long-Form Blog Post',
        description: '2000-word article with H2/H3 structure, FAQ schema, and internal linking strategy.',
        badge: 'SEO Content',
        presetAnswers: {
          content_type: 'seo_blog_post',
          target_reader: 'professional_audience',
          tone_voice: 'authoritative_conversational',
          word_count_target: 'long_2000',
          structure_format: 'h2_h3_faq',
          cta_objective: 'newsletter_signup'
        }
      },
      {
        id: 'writing_brand_story',
        title: '✨ Brand Origin Story Narrative',
        description: 'Compelling founder/company origin story using the hero journey framework.',
        badge: 'Brand Storytelling',
        presetAnswers: {
          content_type: 'brand_narrative',
          target_reader: 'general_consumer',
          tone_voice: 'warm_inspirational',
          word_count_target: 'medium_800',
          structure_format: 'hero_journey',
          cta_objective: 'brand_affinity'
        }
      },
      {
        id: 'writing_product_desc',
        title: '🛍️ E-Commerce Product Description Suite',
        description: 'Benefit-driven product descriptions with sensory language and urgency triggers.',
        badge: 'E-Commerce Copy',
        presetAnswers: {
          content_type: 'product_descriptions',
          target_reader: 'general_consumer',
          tone_voice: 'persuasive_benefit',
          word_count_target: 'short_150',
          structure_format: 'benefit_feature_proof',
          cta_objective: 'purchase_add_cart'
        }
      }
    ],
    fields: [
      {
        id: 'content_type',
        label: 'What type of written content do you need?',
        technicalTerm: 'Content Format & Genre',
        eli5: 'A blog post, product descriptions, email copy, social captions, or a creative story?',
        example: 'SEO-optimized blog post with keyword targeting',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Selects the writing framework, structure, and genre conventions.',
        options: [
          { label: 'SEO Blog Post / Article (Keyword-optimized long-form with H2/H3 headers)', value: 'seo_blog_post', isDefault: true },
          { label: 'Brand Story / About Page Narrative (Founder journey, mission statement)', value: 'brand_narrative' },
          { label: 'Product Descriptions (Benefit-driven copy for e-commerce listings)', value: 'product_descriptions' },
          { label: 'Email Copy / Newsletter (Subject lines, body, CTAs for drip campaigns)', value: 'email_newsletter' },
          { label: 'Social Media Captions (Instagram, LinkedIn, Twitter post copy)', value: 'social_captions' },
          { label: 'Creative Fiction / Short Story (Narrative prose, dialogue, world-building)', value: 'creative_fiction' }
        ]
      },
      {
        id: 'target_reader',
        label: 'Who is the target reader?',
        technicalTerm: 'Audience Persona & Reading Level',
        eli5: 'Who will read this? Industry professionals, general consumers, or young audiences?',
        example: 'B2B professionals in tech — reading level: educated but skimmers',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Adjusts vocabulary, complexity, and examples to match the reader.',
        options: [
          { label: 'Industry Professionals (Educated, domain-aware, value depth and precision)', value: 'professional_audience', isDefault: true },
          { label: 'General Consumer (Casual reading, benefit-focused, 8th-grade readability)', value: 'general_consumer' },
          { label: 'Technical Developers (Code-aware, want specifics and examples)', value: 'developer_reader' },
          { label: 'Executive / C-Suite (Scanners, want ROI and bottom-line impact)', value: 'executive_csuite' }
        ]
      },
      {
        id: 'tone_voice',
        label: 'What tone and voice should the writing have?',
        technicalTerm: 'Brand Voice & Tonal Register',
        eli5: 'Should it sound authoritative, warm, edgy, or formal?',
        example: 'Authoritative yet conversational (like a knowledgeable friend)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Shapes word choice, sentence structure, and emotional register.',
        options: [
          { label: 'Authoritative & Conversational (Expert but approachable, like a smart colleague)', value: 'authoritative_conversational', isDefault: true },
          { label: 'Warm & Inspirational (Emotional, story-driven, purpose-led)', value: 'warm_inspirational' },
          { label: 'Persuasive & Benefit-Driven (Direct, action-oriented, urgency-building)', value: 'persuasive_benefit' },
          { label: 'Formal & Academic (Third person, passive voice, scholarly tone)', value: 'formal_academic' },
          { label: 'Witty & Edgy (Bold, irreverent, distinctive brand personality)', value: 'witty_edgy' }
        ]
      },
      {
        id: 'word_count_target',
        label: 'What is the target word count?',
        technicalTerm: 'Content Length & Depth Specification',
        eli5: 'Short captions, medium articles, or long-form deep dives?',
        example: '2000-2500 words (long-form SEO article)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Calibrates the depth of coverage and structural complexity.',
        options: [
          { label: 'Short (100-300 words: product descriptions, social posts, bios)', value: 'short_150', isDefault: true },
          { label: 'Medium (600-1200 words: newsletter, about page, case study)', value: 'medium_800' },
          { label: 'Long-Form (1500-2500 words: SEO blog post, thought leadership)', value: 'long_2000' },
          { label: 'Deep Dive (3000+ words: pillar page, comprehensive guide)', value: 'deep_3000' }
        ]
      },
      {
        id: 'structure_format',
        label: 'What structural format should the content follow?',
        technicalTerm: 'Content Architecture & Framework',
        eli5: 'Headers with FAQ schema for SEO? Hero journey for storytelling? Problem-solution for persuasion?',
        example: 'H2/H3 header hierarchy with FAQ section for schema markup',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Templates the heading structure and content flow.',
        options: [
          { label: 'H2/H3 Headers + FAQ Section (SEO-optimized, scannable, schema-ready)', value: 'h2_h3_faq', isDefault: true },
          { label: 'Hero Journey Arc (Setup → Conflict → Resolution → Transformation)', value: 'hero_journey' },
          { label: 'Problem → Solution → Proof (Persuasive copywriting framework)', value: 'problem_solution_proof' },
          { label: 'Benefit → Feature → Social Proof (E-commerce product copy)', value: 'benefit_feature_proof' },
          { label: 'Listicle / Numbered Tips (Highly shareable, snackable format)', value: 'listicle_tips' }
        ]
      },
      {
        id: 'cta_objective',
        label: 'What should the call-to-action drive?',
        technicalTerm: 'Conversion Objective & CTA Type',
        eli5: 'What do you want the reader to do after reading? Sign up, buy, share, or learn more?',
        example: 'Newsletter signup with a lead magnet download',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Crafts the closing CTA and micro-CTAs throughout the piece.',
        options: [
          { label: 'Newsletter / Email Signup (Lead capture with content upgrade)', value: 'newsletter_signup', isDefault: true },
          { label: 'Purchase / Add to Cart (Direct conversion, urgency triggers)', value: 'purchase_add_cart' },
          { label: 'Brand Affinity / Share (No hard sell, build trust and social sharing)', value: 'brand_affinity' },
          { label: 'Book a Demo / Contact Sales (B2B lead generation)', value: 'book_demo' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'marketing_content_strategy', title: 'Marketing Campaign Strategy', description: 'Connect content pieces to a broader campaign plan.' }
    ],
    verificationChecks: [
      { id: 'vc_plagiarism', title: 'Originality Check', description: 'Ensure content is original and not directly copied from existing sources.', category: 'standards' },
      { id: 'vc_readability', title: 'Readability Score Check', description: 'Verify content matches the target reading level (Flesch-Kincaid or Hemingway score).', category: 'evidence' }
    ]
  },

  // 7. CYBERSECURITY & THREAT ANALYSIS
  {
    id: 'cybersecurity_threat_analysis',
    title: 'Cybersecurity & Threat Analysis',
    domainId: 'cybersecurity_privacy',
    domainName: 'Cybersecurity, privacy and trust',
    group: 'Technology & engineering',
    discipline: 'Information Security & Threat Intelligence',
    summary: 'Build penetration test reports, incident response playbooks, vulnerability assessments, or security architecture reviews.',
    outcome: 'A structured security assessment with threat modeling, vulnerability findings, risk ratings, and remediation recommendations.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Security Assessment & Incident Response Plan',
    modality: 'text',
    primaryIntent: 'Review / audit',
    aliases: ['cybersecurity', 'security', 'penetration test', 'pentest', 'vulnerability', 'incident response', 'threat model', 'OWASP', 'SOC', 'SIEM', 'firewall', 'malware'],
    governingStandards: ['OWASP Top 10', 'NIST CSF 2.0', 'MITRE ATT&CK Framework', 'CIS Benchmarks'],
    reviewerRole: 'CISO / Senior Security Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['security_task', 'threat_surface'],
      fallbackGuidance: 'If the attack surface is unspecified, prompt generates an asset inventory and threat surface discovery checklist.'
    },
    recipes: [
      {
        id: 'cyber_pentest_report',
        title: '🔓 Web Application Penetration Test Report',
        description: 'OWASP Top 10 assessment with vulnerability findings, CVSS scores, and remediation priorities.',
        badge: 'Pen Test',
        presetAnswers: { security_task: 'pentest_report', threat_surface: 'web_application', framework_standard: 'owasp_top10', severity_scoring: 'cvss_v3', remediation_timeline: 'priority_30_60_90', output_format: 'pentest_findings' }
      },
      {
        id: 'cyber_incident_playbook',
        title: '🚨 Ransomware Incident Response Playbook',
        description: 'Step-by-step IR playbook with containment, eradication, recovery, and lessons learned.',
        badge: 'Incident Response',
        presetAnswers: { security_task: 'incident_response', threat_surface: 'enterprise_network', framework_standard: 'nist_csf', severity_scoring: 'cvss_v3', remediation_timeline: 'immediate_72h', output_format: 'ir_playbook' }
      },
      {
        id: 'cyber_architecture_review',
        title: '🏗️ Cloud Security Architecture Review',
        description: 'AWS/Azure/GCP security posture review with IAM, networking, encryption, and logging assessment.',
        badge: 'Cloud Security',
        presetAnswers: { security_task: 'architecture_review', threat_surface: 'cloud_infrastructure', framework_standard: 'cis_benchmarks', severity_scoring: 'risk_matrix', remediation_timeline: 'priority_30_60_90', output_format: 'architecture_findings' }
      }
    ],
    fields: [
      {
        id: 'security_task',
        label: 'What type of security assessment do you need?',
        technicalTerm: 'Security Assessment Type',
        eli5: 'Are you doing a penetration test, responding to an incident, or reviewing architecture?',
        example: 'Web application penetration test following OWASP methodology',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the assessment methodology and deliverable template.',
        options: [
          { label: 'Penetration Test Report (Vulnerability findings with proof-of-concept)', value: 'pentest_report', isDefault: true },
          { label: 'Incident Response Playbook (Step-by-step containment & recovery plan)', value: 'incident_response' },
          { label: 'Security Architecture Review (Design review of infrastructure & controls)', value: 'architecture_review' },
          { label: 'Threat Model (STRIDE/DREAD analysis of application attack surface)', value: 'threat_model' }
        ]
      },
      {
        id: 'threat_surface',
        label: 'What is the target attack surface?',
        technicalTerm: 'Attack Surface & Asset Scope',
        eli5: 'What system or environment are you assessing? A web app, cloud infrastructure, or internal network?',
        example: 'Web application with REST API, authentication, and payment processing',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Focuses the assessment on relevant vulnerability categories.',
        options: [
          { label: 'Web Application (Frontend + REST API, authentication, file uploads)', value: 'web_application', isDefault: true },
          { label: 'Cloud Infrastructure (AWS/Azure/GCP: IAM, VPC, S3, Lambda)', value: 'cloud_infrastructure' },
          { label: 'Enterprise Network (Active Directory, VPN, lateral movement, endpoints)', value: 'enterprise_network' },
          { label: 'Mobile Application (iOS/Android: data storage, API communication, jailbreak)', value: 'mobile_application' }
        ]
      },
      {
        id: 'framework_standard',
        label: 'Which security framework should guide the assessment?',
        technicalTerm: 'Security Framework & Standard',
        eli5: 'OWASP covers web vulnerabilities; NIST covers enterprise security programs; CIS covers hardening baselines.',
        example: 'OWASP Top 10 (2021) for web application vulnerabilities',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Applies framework-specific control categories and finding classifications.',
        options: [
          { label: 'OWASP Top 10 (Web application vulnerability categories)', value: 'owasp_top10', isDefault: true },
          { label: 'NIST Cybersecurity Framework 2.0 (Identify, Protect, Detect, Respond, Recover)', value: 'nist_csf' },
          { label: 'MITRE ATT&CK (Adversary tactics, techniques, and procedures mapping)', value: 'mitre_attack' },
          { label: 'CIS Benchmarks (Hardening baselines for OS, cloud, and network devices)', value: 'cis_benchmarks' }
        ]
      },
      {
        id: 'severity_scoring',
        label: 'How should vulnerabilities be scored?',
        technicalTerm: 'Vulnerability Severity Scoring System',
        eli5: 'CVSS gives a 0-10 score; risk matrix uses likelihood × impact.',
        example: 'CVSS v3.1 scoring with Critical/High/Medium/Low classifications',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Formats vulnerability findings with consistent severity ratings.',
        options: [
          { label: 'CVSS v3.1 Scoring (0-10 scale: Critical ≥9.0, High ≥7.0, Medium ≥4.0)', value: 'cvss_v3', isDefault: true },
          { label: 'Risk Matrix (Likelihood × Impact = Risk Level: Critical/High/Medium/Low)', value: 'risk_matrix' }
        ]
      },
      {
        id: 'remediation_timeline',
        label: 'What remediation timeline should be recommended?',
        technicalTerm: 'Remediation Priority & SLA',
        eli5: 'How urgently should findings be fixed? Immediately for active incidents, or phased for planned reviews?',
        example: 'Critical: 7 days, High: 30 days, Medium: 60 days, Low: 90 days',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds remediation timelines and priority classifications to findings.',
        options: [
          { label: 'Priority Tiers: Critical 7d / High 30d / Medium 60d / Low 90d', value: 'priority_30_60_90', isDefault: true },
          { label: 'Immediate 72-Hour Response (Active incident or zero-day exploitation)', value: 'immediate_72h' }
        ]
      },
      {
        id: 'output_format',
        label: 'What deliverable format is needed?',
        technicalTerm: 'Security Report Format',
        eli5: 'A pentest findings report, an incident response playbook, or an architecture review?',
        example: 'Penetration test report with executive summary + technical findings',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the deliverable sections and executive summary.',
        options: [
          { label: 'Pentest Findings Report (Executive summary + detailed technical findings)', value: 'pentest_findings', isDefault: true },
          { label: 'Incident Response Playbook (Step-by-step runbook for security team)', value: 'ir_playbook' },
          { label: 'Architecture Review Findings (Control gap analysis with recommendations)', value: 'architecture_findings' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'computing_kubernetes_ops', title: 'DevSecOps & K8s Security', description: 'Secure container workloads and CI/CD pipelines.' }
    ],
    verificationChecks: [
      { id: 'vc_scope', title: 'Scope Boundaries', description: 'Verify the assessment scope is clearly defined and does not extend to unauthorized systems.', category: 'limitations' },
      { id: 'vc_false_positives', title: 'False Positive Warning', description: 'Remind that AI-generated findings must be validated by a certified security professional.', category: 'assumptions' }
    ]
  },

  // 8. HR & TALENT ACQUISITION
  {
    id: 'hr_talent_acquisition',
    title: 'HR, Recruitment & People Operations',
    domainId: 'careers_workplace',
    domainName: 'Careers, workplace skills and professional development',
    group: 'Economy & work',
    discipline: 'Human Resources & Talent Management',
    summary: 'Write job descriptions, design interview rubrics, create performance review frameworks, or draft employee policies.',
    outcome: 'Ready-to-use HR deliverables: bias-aware job posts, structured interview guides, and DEI-conscious people processes.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'HR Document & People Process',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['HR', 'recruiting', 'hiring', 'job description', 'interview', 'performance review', 'onboarding', 'talent', 'employee handbook', 'compensation'],
    governingStandards: ['EEOC Guidelines', 'SHRM Best Practices', 'Inclusive Language Guidelines'],
    reviewerRole: 'VP People / HR Business Partner',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['hr_task', 'role_level'],
      fallbackGuidance: 'If job details are unclear, prompt generates a role requirements discovery questionnaire.'
    },
    recipes: [
      {
        id: 'hr_job_description',
        title: '📋 Inclusive Senior Engineer Job Description',
        description: 'Bias-audited JD with clear leveling, must-have vs nice-to-have, and inclusive language.',
        badge: 'Job Posting',
        presetAnswers: { hr_task: 'job_description', role_level: 'senior_ic', department: 'engineering_product', inclusion_lens: 'bias_audit', output_format: 'jd_posting' }
      },
      {
        id: 'hr_interview_rubric',
        title: '🎯 Behavioral Interview Question Rubric',
        description: 'STAR-method questions with scoring rubrics and red/green flag indicators.',
        badge: 'Interview Design',
        presetAnswers: { hr_task: 'interview_rubric', role_level: 'senior_ic', department: 'engineering_product', inclusion_lens: 'structured_scoring', output_format: 'interview_guide' }
      },
      {
        id: 'hr_performance_review',
        title: '⭐ Quarterly Performance Review Framework',
        description: 'OKR-aligned performance review template with growth areas and compensation calibration.',
        badge: 'Performance Mgmt',
        presetAnswers: { hr_task: 'performance_framework', role_level: 'mid_level', department: 'cross_functional', inclusion_lens: 'bias_audit', output_format: 'review_template' }
      }
    ],
    fields: [
      {
        id: 'hr_task',
        label: 'What HR deliverable do you need?',
        technicalTerm: 'People Operations Task Type',
        eli5: 'Are you writing a job description, designing interview questions, or creating a performance review?',
        example: 'Write a bias-audited job description for a Senior Backend Engineer',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the HR document template and compliance considerations.',
        options: [
          { label: 'Job Description / Job Posting (Role requirements, responsibilities, qualifications)', value: 'job_description', isDefault: true },
          { label: 'Interview Question Rubric (Behavioral STAR questions with scoring criteria)', value: 'interview_rubric' },
          { label: 'Performance Review Framework (OKR-aligned review template with calibration)', value: 'performance_framework' },
          { label: 'Onboarding Plan (30-60-90 day new hire integration plan)', value: 'onboarding_plan' },
          { label: 'Employee Policy Document (Remote work, PTO, code of conduct)', value: 'policy_document' }
        ]
      },
      {
        id: 'role_level',
        label: 'What seniority level is this for?',
        technicalTerm: 'Career Level & IC/Manager Track',
        eli5: 'Entry-level, mid-career, senior individual contributor, or management?',
        example: 'Senior IC (Individual Contributor, 5-8 years experience)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Calibrates expectations, compensation bands, and scope of responsibility.',
        options: [
          { label: 'Senior Individual Contributor (IC3-IC4, 5-8 years, technical leadership)', value: 'senior_ic', isDefault: true },
          { label: 'Mid-Level (IC2-IC3, 2-5 years, growing autonomy)', value: 'mid_level' },
          { label: 'Entry-Level / New Grad (IC1, 0-2 years, learning orientation)', value: 'entry_level' },
          { label: 'Engineering Manager / People Manager (M1-M2, team of 5-12)', value: 'eng_manager' },
          { label: 'Director / VP Level (Strategic leadership, multiple teams)', value: 'director_vp' }
        ]
      },
      {
        id: 'department',
        label: 'What department or function is this for?',
        technicalTerm: 'Organizational Function & Department',
        eli5: 'Engineering, sales, marketing, operations, or cross-functional?',
        example: 'Engineering & Product Development',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Tailors competencies, tools, and domain-specific requirements.',
        options: [
          { label: 'Engineering & Product Development (Software, hardware, QA, DevOps)', value: 'engineering_product', isDefault: true },
          { label: 'Sales & Business Development (Account executives, SDRs, partnerships)', value: 'sales_bizdev' },
          { label: 'Marketing & Communications (Growth, content, brand, PR)', value: 'marketing_comms' },
          { label: 'Operations & Finance (Accounting, supply chain, HR ops)', value: 'operations_finance' },
          { label: 'Cross-Functional / General Management', value: 'cross_functional' }
        ]
      },
      {
        id: 'inclusion_lens',
        label: 'What diversity and inclusion considerations should be applied?',
        technicalTerm: 'DEI & Inclusive Hiring Lens',
        eli5: 'Should the job post be audited for gendered language? Should interview questions be structured to reduce bias?',
        example: 'Full bias audit: remove gendered language, avoid unnecessary degree requirements',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Applies inclusive language rules and structured evaluation to reduce unconscious bias.',
        options: [
          { label: 'Full Bias Audit (Remove gendered language, unnecessary degree requirements, coded words)', value: 'bias_audit', isDefault: true },
          { label: 'Structured Scoring (Score each candidate on same criteria to reduce gut-feel bias)', value: 'structured_scoring' },
          { label: 'Standard (No specific DEI modifications)', value: 'standard_no_dei' }
        ]
      },
      {
        id: 'output_format',
        label: 'What format should the deliverable take?',
        technicalTerm: 'HR Document Output Format',
        eli5: 'A ready-to-post job listing, an interview guide, or a review template?',
        example: 'Ready-to-post job description on LinkedIn / Lever / Greenhouse',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the final deliverable format and sections.',
        options: [
          { label: 'Job Description / Posting (Ready for LinkedIn, Lever, Greenhouse ATS)', value: 'jd_posting', isDefault: true },
          { label: 'Interview Guide (Question bank + scoring rubric + debrief template)', value: 'interview_guide' },
          { label: 'Performance Review Template (Self-assessment + manager review sections)', value: 'review_template' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'universal_builder', title: 'General Business Communication', description: 'Draft offer letters, feedback emails, or team announcements.' }
    ],
    verificationChecks: [
      { id: 'vc_eeoc', title: 'EEOC Compliance Check', description: 'Verify job descriptions do not contain discriminatory language or unnecessary barriers.', category: 'standards' },
      { id: 'vc_structured', title: 'Structured Process Integrity', description: 'Ensure interview rubrics use the same criteria for all candidates.', category: 'evidence' }
    ]
  },

  // 9. HEALTH, FITNESS & NUTRITION
  {
    id: 'health_fitness_nutrition',
    title: 'Health, Fitness & Nutrition Planning',
    domainId: 'fitness_nutrition',
    domainName: 'Fitness, nutrition and wellness',
    group: 'Health, food & living things',
    discipline: 'Exercise Science & Nutritional Planning',
    summary: 'Design training programs, meal plans, recovery protocols, or fitness assessments with proper periodization and macro targeting.',
    outcome: 'A structured fitness or nutrition plan with progressive overload, macro calculations, and safety disclaimers.',
    skillLevel: 'Beginner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Training Program & Nutrition Plan',
    modality: 'plan',
    primaryIntent: 'Plan / schedule',
    aliases: ['fitness', 'workout', 'gym', 'nutrition', 'diet', 'meal plan', 'weight loss', 'muscle building', 'protein', 'macro', 'exercise', 'running', 'strength training'],
    governingStandards: ['NSCA Strength & Conditioning Guidelines', 'ACSM Exercise Guidelines', 'Dietary Guidelines for Americans 2025'],
    reviewerRole: 'Certified Personal Trainer (NSCA-CSCS) / Registered Dietitian',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['fitness_goal', 'experience_level'],
      fallbackGuidance: 'If current fitness level is unknown, prompt generates a fitness assessment questionnaire before programming.'
    },
    recipes: [
      {
        id: 'fitness_strength_program',
        title: '🏋️ 12-Week Strength Training Program',
        description: 'Progressive overload hypertrophy program with compound lifts, RPE targets, and deload weeks.',
        badge: 'Strength Training',
        presetAnswers: { fitness_goal: 'strength_hypertrophy', experience_level: 'intermediate', training_frequency: 'four_days', equipment_access: 'full_gym', dietary_approach: 'high_protein_surplus', safety_disclaimer: 'consult_professional' }
      },
      {
        id: 'fitness_meal_prep',
        title: '🥗 Weekly Meal Prep & Macro Calculator',
        description: 'Budget-friendly meal prep with macro targets, grocery list, and batch cooking instructions.',
        badge: 'Nutrition Planning',
        presetAnswers: { fitness_goal: 'fat_loss_maintain', experience_level: 'beginner', training_frequency: 'three_days', equipment_access: 'home_minimal', dietary_approach: 'moderate_deficit', safety_disclaimer: 'consult_professional' }
      },
      {
        id: 'fitness_recovery_protocol',
        title: '🧘 Recovery & Mobility Protocol',
        description: 'Active recovery, stretching routine, sleep optimization, and injury prevention strategies.',
        badge: 'Recovery & Mobility',
        presetAnswers: { fitness_goal: 'mobility_recovery', experience_level: 'intermediate', training_frequency: 'daily_movement', equipment_access: 'home_minimal', dietary_approach: 'anti_inflammatory', safety_disclaimer: 'consult_professional' }
      }
    ],
    fields: [
      {
        id: 'fitness_goal',
        label: 'What is your primary fitness or health goal?',
        technicalTerm: 'Training Objective & Physiological Adaptation',
        eli5: 'Are you trying to build muscle, lose fat, improve endurance, or enhance mobility?',
        example: 'Build lean muscle mass with progressive strength training',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Determines the training methodology, rep ranges, and nutritional strategy.',
        options: [
          { label: 'Strength & Muscle Hypertrophy (Build muscle, increase strength, progressive overload)', value: 'strength_hypertrophy', isDefault: true },
          { label: 'Fat Loss & Body Recomposition (Lose fat while maintaining muscle mass)', value: 'fat_loss_maintain' },
          { label: 'Cardiovascular Endurance (Running, cycling, swimming performance)', value: 'cardio_endurance' },
          { label: 'Mobility, Flexibility & Recovery (Injury prevention, stretching, active recovery)', value: 'mobility_recovery' },
          { label: 'Sport-Specific Performance (Athletic performance for a specific sport)', value: 'sport_specific' }
        ]
      },
      {
        id: 'experience_level',
        label: 'What is your current training experience?',
        technicalTerm: 'Training Age & Readiness Level',
        eli5: 'How long have you been training consistently? Beginners need simpler programs; advanced lifters need periodization.',
        example: 'Intermediate: 1-3 years of consistent training with compound lifts',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Scales exercise complexity, volume, and progression rate.',
        options: [
          { label: 'Beginner (0-6 months, learning movement patterns, linear progression)', value: 'beginner', isDefault: true },
          { label: 'Intermediate (6 months - 3 years, comfortable with compound lifts)', value: 'intermediate' },
          { label: 'Advanced (3+ years, needs periodization, intensity techniques)', value: 'advanced' }
        ]
      },
      {
        id: 'training_frequency',
        label: 'How many days per week can you train?',
        technicalTerm: 'Weekly Training Frequency & Split Design',
        eli5: 'More days allows more volume per muscle group. 3 days works well for full-body; 5-6 for body-part splits.',
        example: '4 days per week: Upper/Lower split or Push/Pull/Legs',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Configures the training split, rest days, and weekly volume distribution.',
        options: [
          { label: '3 Days / Week (Full-body or A/B alternating sessions)', value: 'three_days', isDefault: true },
          { label: '4 Days / Week (Upper/Lower split or Push/Pull rotation)', value: 'four_days' },
          { label: '5-6 Days / Week (Push/Pull/Legs or body-part split)', value: 'five_six_days' },
          { label: 'Daily Movement Practice (Yoga, walking, active recovery focus)', value: 'daily_movement' }
        ]
      },
      {
        id: 'equipment_access',
        label: 'What equipment do you have access to?',
        technicalTerm: 'Training Environment & Equipment Inventory',
        eli5: 'Full commercial gym, home gym with basics, or just bodyweight and resistance bands?',
        example: 'Full commercial gym with barbells, dumbbells, cables, and machines',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Substitutes exercises based on available equipment.',
        options: [
          { label: 'Full Commercial Gym (Barbells, dumbbells, cables, machines, cardio equipment)', value: 'full_gym', isDefault: true },
          { label: 'Home Gym — Minimal (Dumbbells, resistance bands, pull-up bar)', value: 'home_minimal' },
          { label: 'Bodyweight Only (No equipment, outdoor park, travel workout)', value: 'bodyweight_only' }
        ]
      },
      {
        id: 'dietary_approach',
        label: 'What nutritional strategy should accompany the program?',
        technicalTerm: 'Nutritional Periodization & Macronutrient Strategy',
        eli5: 'Are you eating in a surplus to build muscle, a deficit to lose fat, or maintaining?',
        example: 'High-protein caloric surplus (2g protein/kg, 300-500 kcal surplus)',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds macro targets, meal timing, and dietary framework to the plan.',
        options: [
          { label: 'High-Protein Caloric Surplus (Muscle building: 2g protein/kg, +300-500 kcal)', value: 'high_protein_surplus', isDefault: true },
          { label: 'Moderate Caloric Deficit (Fat loss: high protein, -400-600 kcal deficit)', value: 'moderate_deficit' },
          { label: 'Anti-Inflammatory Recovery Focus (Omega-3 rich, turmeric, sleep quality foods)', value: 'anti_inflammatory' },
          { label: 'Maintenance & Performance (Eat at TDEE, fuel training performance)', value: 'maintenance_performance' }
        ]
      },
      {
        id: 'safety_disclaimer',
        label: 'Safety and medical disclaimer',
        technicalTerm: 'Health & Safety Guardrail',
        eli5: 'AI fitness plans are general guidance. Always consult a doctor before starting a new program.',
        example: 'Consult a physician and certified trainer before beginning any exercise program',
        type: 'select', step: 'finetune', required: true,
        promptImpact: 'Adds mandatory health disclaimer and injury prevention guidelines.',
        options: [
          { label: 'Consult a certified fitness professional and physician before starting (Mandatory)', value: 'consult_professional', isDefault: true }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'universal_builder', title: 'General Wellness Planning', description: 'Create broader lifestyle and wellness plans.' }
    ],
    verificationChecks: [
      { id: 'vc_medical', title: 'Medical Clearance Notice', description: 'Prompt MUST include: "Consult a physician before starting any new exercise or nutrition program."', category: 'limitations' },
      { id: 'vc_progressive', title: 'Progressive Overload Principle', description: 'Verify the program includes progressive overload and deload periods.', category: 'standards' }
    ]
  },

  // 10. REAL ESTATE & PROPERTY ANALYSIS
  {
    id: 'realestate_property_analysis',
    title: 'Real Estate Investment & Property Analysis',
    domainId: 'realestate_housing',
    domainName: 'Real estate, property and urban planning',
    group: 'Economy & work',
    discipline: 'Real Estate Finance & Property Valuation',
    summary: 'Analyze rental investments, commercial property deals, development feasibility, or lease negotiations with financial modeling.',
    outcome: 'A structured real estate analysis with cap rate, cash-on-cash return, pro forma projections, and risk factors.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Property Investment Analysis & Pro Forma',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ['real estate', 'property', 'rental', 'cap rate', 'NOI', 'commercial real estate', 'REIT', 'mortgage', 'appraisal', 'zoning', 'development'],
    governingStandards: ['RICS Valuation Standards (Red Book)', 'Uniform Standards of Professional Appraisal Practice (USPAP)'],
    reviewerRole: 'Licensed Real Estate Appraiser / CFA (Real Estate)',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['property_type', 'analysis_objective'],
      fallbackGuidance: 'If financial details are unavailable, prompt generates a due diligence data-gathering checklist.'
    },
    recipes: [
      {
        id: 're_rental_analysis',
        title: '🏠 Residential Rental Property Investment',
        description: 'Buy-and-hold rental analysis with cap rate, cash-on-cash return, and mortgage amortization.',
        badge: 'Rental Investment',
        presetAnswers: { property_type: 'residential_rental', analysis_objective: 'investment_return', financing_structure: 'conventional_mortgage', market_scenario: 'stable_growth', valuation_method: 'income_cap_rate', output_format: 'investment_memo' }
      },
      {
        id: 're_commercial_lease',
        title: '🏢 Commercial Office Lease Review',
        description: 'Triple-net lease analysis with escalation clauses, tenant improvement allowance, and break options.',
        badge: 'Commercial Lease',
        presetAnswers: { property_type: 'commercial_office', analysis_objective: 'lease_negotiation', financing_structure: 'tenant_perspective', market_scenario: 'stable_growth', valuation_method: 'dcf_lease_value', output_format: 'lease_analysis' }
      },
      {
        id: 're_development_feasibility',
        title: '🏗️ Development Feasibility Study',
        description: 'Ground-up construction feasibility with land cost, construction budget, and profit margin projection.',
        badge: 'Development',
        presetAnswers: { property_type: 'development_land', analysis_objective: 'development_feasibility', financing_structure: 'construction_loan', market_scenario: 'cyclical_caution', valuation_method: 'residual_land_value', output_format: 'feasibility_report' }
      }
    ],
    fields: [
      {
        id: 'property_type',
        label: 'What type of property are you analyzing?',
        technicalTerm: 'Property Asset Class',
        eli5: 'A rental house, commercial office, retail space, or development land?',
        example: 'Residential multi-family rental (duplex, 4-plex)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the appropriate valuation methodology and market benchmarks.',
        options: [
          { label: 'Residential Rental (Single-family, duplex, 4-plex buy-and-hold)', value: 'residential_rental', isDefault: true },
          { label: 'Commercial Office / Retail (NNN lease, class A/B/C)', value: 'commercial_office' },
          { label: 'Industrial / Warehouse / Logistics', value: 'industrial_warehouse' },
          { label: 'Development Land (Ground-up construction feasibility)', value: 'development_land' }
        ]
      },
      {
        id: 'analysis_objective',
        label: 'What is the purpose of this analysis?',
        technicalTerm: 'Investment Analysis Objective',
        eli5: 'Are you evaluating an investment return, negotiating a lease, or assessing development feasibility?',
        example: 'Investment return analysis with cash-on-cash and cap rate benchmarking',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Configures the financial modeling approach and key metrics.',
        options: [
          { label: 'Investment Return Analysis (Cap rate, cash-on-cash, IRR, equity multiple)', value: 'investment_return', isDefault: true },
          { label: 'Lease Negotiation Review (Rent escalations, TI allowance, break clauses)', value: 'lease_negotiation' },
          { label: 'Development Feasibility (Construction cost, absorption rate, profit margin)', value: 'development_feasibility' },
          { label: 'Comparative Market Analysis (CMA for pricing/listing a property)', value: 'cma_pricing' }
        ]
      },
      {
        id: 'financing_structure',
        label: 'What is the financing structure?',
        technicalTerm: 'Capital Structure & Leverage',
        eli5: 'How will the property be financed? Traditional mortgage, all-cash, or construction loan?',
        example: 'Conventional mortgage with 25% down payment at 6.5% interest rate',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Calculates debt service coverage ratio (DSCR) and leveraged returns.',
        options: [
          { label: 'Conventional Mortgage (20-25% down, 30-year fixed or variable rate)', value: 'conventional_mortgage', isDefault: true },
          { label: 'All-Cash Purchase (No leverage, simplifies analysis to unleveraged yield)', value: 'all_cash' },
          { label: 'Construction Loan + Permanent Takeout (Development financing)', value: 'construction_loan' },
          { label: 'Tenant / Lessee Perspective (Lease cost analysis, not ownership)', value: 'tenant_perspective' }
        ]
      },
      {
        id: 'market_scenario',
        label: 'What market conditions should be modeled?',
        technicalTerm: 'Market Cycle & Growth Assumptions',
        eli5: 'Are you modeling optimistic growth, stable conditions, or a downturn stress test?',
        example: 'Stable growth: 3% annual rent escalation, 5% vacancy rate',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Sets rent growth, vacancy, and cap rate compression/expansion assumptions.',
        options: [
          { label: 'Stable Growth (3% annual rent escalation, 5% vacancy, steady cap rates)', value: 'stable_growth', isDefault: true },
          { label: 'Cyclical Caution (Flat rents year 1-2, higher vacancy buffer, cap rate expansion)', value: 'cyclical_caution' },
          { label: 'Bull Market (5%+ rent growth, low vacancy, cap rate compression)', value: 'bull_optimistic' }
        ]
      },
      {
        id: 'valuation_method',
        label: 'Which valuation method should be used?',
        technicalTerm: 'Property Valuation Methodology',
        eli5: 'Income approach uses NOI and cap rate; DCF projects future cash flows; CMA compares recent sales.',
        example: 'Income Capitalization Approach (NOI ÷ Cap Rate)',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Selects the valuation formula and output tables.',
        options: [
          { label: 'Income Capitalization (NOI ÷ Cap Rate — standard for income properties)', value: 'income_cap_rate', isDefault: true },
          { label: 'Discounted Cash Flow / Lease Value (10-year projected cash flows)', value: 'dcf_lease_value' },
          { label: 'Residual Land Value (Development site: end value minus construction costs)', value: 'residual_land_value' },
          { label: 'Comparable Sales Analysis (Recent transaction benchmarking)', value: 'comparable_sales' }
        ]
      },
      {
        id: 'output_format',
        label: 'What format should the analysis take?',
        technicalTerm: 'Real Estate Deliverable Format',
        eli5: 'A one-page investment summary, a full feasibility report, or a lease analysis?',
        example: 'Investment memo with pro forma projections and sensitivity tables',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the output sections and financial tables.',
        options: [
          { label: 'Investment Memo (Executive summary + pro forma + sensitivity analysis)', value: 'investment_memo', isDefault: true },
          { label: 'Lease Comparison Analysis (Side-by-side lease term evaluation)', value: 'lease_analysis' },
          { label: 'Development Feasibility Report (Land cost + construction + profit projection)', value: 'feasibility_report' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'finance_equity_valuation', title: 'Financial Valuation Framework', description: 'Apply DCF and financial modeling concepts.' }
    ],
    verificationChecks: [
      { id: 'vc_not_appraisal', title: 'Not a Certified Appraisal', description: 'Prompt MUST include: "This is an educational analysis and does not constitute a certified property appraisal."', category: 'limitations' },
      { id: 'vc_local_market', title: 'Local Market Verification', description: 'Remind that cap rates, vacancy, and rent levels must be verified with local market data.', category: 'assumptions' }
    ]
  },

  // 11. ELECTRICAL & ELECTRONICS ENGINEERING
  {
    id: 'electrical_electronics_eng',
    title: 'Electrical & Electronics Engineering Design',
    domainId: 'electrical_energy',
    domainName: 'Electrical, electronics and energy',
    group: 'Technology & engineering',
    discipline: 'Power Systems & Electronic Circuit Design',
    summary: 'Design power supply circuits, analyze signal integrity, specify embedded firmware architectures, or plan renewable energy systems.',
    outcome: 'A structured engineering design brief with component selection, thermal analysis, EMC considerations, and verification test plan.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Electrical Engineering Design Brief',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['electrical engineering', 'electronics', 'circuit design', 'PCB', 'power supply', 'embedded', 'firmware', 'signal processing', 'motor control', 'renewable energy', 'solar', 'battery'],
    governingStandards: ['IEC 61508 Functional Safety', 'IEEE Standards', 'UL/CE Compliance', 'EMC Directive 2014/30/EU'],
    reviewerRole: 'Licensed Professional Engineer (PE) / Senior EE',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['design_domain', 'specifications'],
      fallbackGuidance: 'If voltage/current specs are unknown, prompt generates a requirements elicitation checklist.'
    },
    recipes: [
      {
        id: 'ee_power_supply',
        title: '⚡ Switch-Mode Power Supply Design',
        description: 'Buck converter design with component selection, thermal derating, and EMC filtering.',
        badge: 'Power Electronics',
        presetAnswers: { design_domain: 'power_supply', specifications: 'dc_dc_buck', analysis_depth: 'component_selection', safety_standard: 'ul_ce_compliance', simulation_tool: 'ltspice', output_format: 'design_brief' }
      },
      {
        id: 'ee_embedded_firmware',
        title: '🔧 Embedded Firmware Architecture',
        description: 'STM32/ESP32 firmware with RTOS task scheduling, peripheral drivers, and OTA update strategy.',
        badge: 'Embedded Systems',
        presetAnswers: { design_domain: 'embedded_firmware', specifications: 'mcu_rtos_iot', analysis_depth: 'architecture_review', safety_standard: 'iec_61508', simulation_tool: 'keil_platformio', output_format: 'architecture_doc' }
      },
      {
        id: 'ee_solar_system',
        title: '☀️ Residential Solar PV System Design',
        description: 'Grid-tied PV system sizing with inverter selection, battery storage, and ROI analysis.',
        badge: 'Renewable Energy',
        presetAnswers: { design_domain: 'renewable_energy', specifications: 'solar_pv_residential', analysis_depth: 'system_sizing', safety_standard: 'nec_grid_code', simulation_tool: 'pvsyst_helioscope', output_format: 'design_brief' }
      }
    ],
    fields: [
      {
        id: 'design_domain',
        label: 'What area of electrical engineering is this?',
        technicalTerm: 'Electrical Engineering Sub-Domain',
        eli5: 'Power supply design, embedded firmware, signal processing, or renewable energy?',
        example: 'Switch-mode power supply (DC-DC converter) design',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the engineering design methodology and relevant standards.',
        options: [
          { label: 'Power Supply & Power Electronics (AC-DC, DC-DC converters, motor drives)', value: 'power_supply', isDefault: true },
          { label: 'Embedded Systems & Firmware (MCU, RTOS, IoT, sensor interfaces)', value: 'embedded_firmware' },
          { label: 'Renewable Energy & Solar PV (System sizing, inverters, battery storage)', value: 'renewable_energy' },
          { label: 'PCB Layout & Signal Integrity (High-speed design, impedance matching, EMC)', value: 'pcb_signal_integrity' },
          { label: 'Control Systems & Automation (PID tuning, PLC programming, SCADA)', value: 'control_automation' }
        ]
      },
      {
        id: 'specifications',
        label: 'What are the key electrical specifications?',
        technicalTerm: 'Electrical Specification & Operating Conditions',
        eli5: 'Pick the closest specification profile for your design requirements.',
        example: 'DC-DC Buck: 12V input, 3.3V @ 5A output, >90% efficiency',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Grounds the design in specific voltage, current, and efficiency targets.',
        options: [
          { label: 'DC-DC Buck Converter (12V→3.3V/5V, 1-10A, >90% efficiency target)', value: 'dc_dc_buck', isDefault: true },
          { label: 'MCU + RTOS + IoT (STM32/ESP32, Wi-Fi/BLE, sensor fusion, OTA updates)', value: 'mcu_rtos_iot' },
          { label: 'Solar PV Residential (5-15 kW, grid-tied with optional battery backup)', value: 'solar_pv_residential' },
          { label: 'High-Speed PCB (DDR4/USB 3.0/Ethernet, impedance controlled stackup)', value: 'high_speed_pcb' },
          { label: 'PLC & Industrial Automation (24VDC I/O, Modbus/Profinet, safety interlocks)', value: 'plc_industrial' }
        ]
      },
      {
        id: 'analysis_depth',
        label: 'What level of engineering analysis is needed?',
        technicalTerm: 'Engineering Analysis Scope',
        eli5: 'Do you need component selection, thermal analysis, a full architecture review, or system sizing?',
        example: 'Component selection with thermal derating and efficiency calculations',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Configures the technical depth and deliverable sections.',
        options: [
          { label: 'Component Selection & Sizing (Part numbers, derating, BOM estimation)', value: 'component_selection', isDefault: true },
          { label: 'Architecture Review (Block diagram, interface definitions, design trade-offs)', value: 'architecture_review' },
          { label: 'System Sizing & Feasibility (Energy yield, load matching, ROI payback)', value: 'system_sizing' },
          { label: 'Simulation & Verification Plan (Test bench setup, pass/fail criteria)', value: 'simulation_verification' }
        ]
      },
      {
        id: 'safety_standard',
        label: 'Which safety or compliance standard applies?',
        technicalTerm: 'Safety Certification & Regulatory Compliance',
        eli5: 'UL/CE for consumer products; IEC 61508 for safety-critical; NEC for electrical installations.',
        example: 'UL/CE compliance for consumer electronic product',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds compliance requirements and safety design rules.',
        options: [
          { label: 'UL / CE Certification (Consumer product safety compliance)', value: 'ul_ce_compliance', isDefault: true },
          { label: 'IEC 61508 Functional Safety (Safety-critical embedded systems)', value: 'iec_61508' },
          { label: 'NEC / Grid Interconnection Code (Electrical installation & solar grid-tie)', value: 'nec_grid_code' },
          { label: 'Automotive ISO 26262 (Vehicle electronic system functional safety)', value: 'iso_26262' }
        ]
      },
      {
        id: 'simulation_tool',
        label: 'What simulation or development tools are being used?',
        technicalTerm: 'EDA & Development Toolchain',
        eli5: 'LTspice for circuit simulation; KiCad for PCB layout; PlatformIO for firmware.',
        example: 'LTspice for SMPS simulation, Altium for PCB layout',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Generates tool-specific commands, configurations, and best practices.',
        options: [
          { label: 'LTspice / TINA-TI (Circuit simulation for power and analog design)', value: 'ltspice', isDefault: true },
          { label: 'Keil / PlatformIO / STM32CubeIDE (Embedded firmware development)', value: 'keil_platformio' },
          { label: 'PVsyst / Helioscope (Solar PV system simulation and yield analysis)', value: 'pvsyst_helioscope' },
          { label: 'KiCad / Altium Designer (PCB layout and manufacturing output)', value: 'kicad_altium' }
        ]
      },
      {
        id: 'output_format',
        label: 'What deliverable format is needed?',
        technicalTerm: 'Engineering Document Type',
        eli5: 'A design brief, architecture document, or test/verification plan?',
        example: 'Design brief with schematic concept, BOM, and thermal budget',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the engineering deliverable sections.',
        options: [
          { label: 'Design Brief (Requirements, schematic concept, BOM, thermal budget)', value: 'design_brief', isDefault: true },
          { label: 'Architecture Document (Block diagram, interface specs, software architecture)', value: 'architecture_doc' },
          { label: 'Test & Verification Plan (Test cases, pass/fail criteria, equipment list)', value: 'test_plan' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'civil_structural_review', title: 'Structural & Building Services', description: 'Coordinate electrical with structural engineering.' }
    ],
    verificationChecks: [
      { id: 'vc_derating', title: 'Component Derating Check', description: 'Verify all components are derated per manufacturer guidelines (typically 50-80% of absolute maximum ratings).', category: 'standards' },
      { id: 'vc_safety', title: 'Safety Compliance Review', description: 'Ensure safety-critical designs reference the correct IEC/UL/CE standard and have identified failure modes.', category: 'limitations' }
    ]
  },

  // 12. MECHANICAL & MANUFACTURING ENGINEERING
  {
    id: 'mechanical_manufacturing_eng',
    title: 'Mechanical & Manufacturing Engineering',
    domainId: 'mechanical_automotive',
    domainName: 'Mechanical, automotive and marine engineering',
    group: 'Technology & engineering',
    discipline: 'Mechanical Design & Manufacturing Processes',
    summary: 'Design mechanical components, specify manufacturing processes, perform stress analysis briefs, or plan CNC/3D printing workflows.',
    outcome: 'A structured mechanical design brief with material selection, tolerance analysis, manufacturing process, and quality inspection plan.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Mechanical Design & Manufacturing Brief',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['mechanical engineering', 'manufacturing', 'CNC', '3D printing', 'CAD', 'FEA', 'stress analysis', 'materials', 'GD&T', 'injection molding', 'sheet metal', 'machining'],
    governingStandards: ['ASME Y14.5 GD&T', 'ISO 2768 General Tolerances', 'ASTM Material Standards'],
    reviewerRole: 'Licensed Mechanical PE / Senior Manufacturing Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['design_task', 'material_type'],
      fallbackGuidance: 'If material properties are unknown, prompt generates a material selection decision matrix.'
    },
    recipes: [
      {
        id: 'mech_cnc_process',
        title: '🔩 CNC Machining Process Sheet',
        description: 'Operation sequence, tooling selection, speeds/feeds, and inspection plan for precision machined parts.',
        badge: 'CNC Machining',
        presetAnswers: { design_task: 'manufacturing_process', material_type: 'aluminum_6061', manufacturing_method: 'cnc_milling', tolerance_class: 'precision_h7', inspection_method: 'cmm_dimensional', output_format: 'process_sheet' }
      },
      {
        id: 'mech_fea_stress',
        title: '📐 FEA Stress Analysis Brief',
        description: 'Finite Element Analysis setup with boundary conditions, mesh strategy, and results interpretation.',
        badge: 'Stress Analysis',
        presetAnswers: { design_task: 'stress_analysis', material_type: 'steel_structural', manufacturing_method: 'welded_fabrication', tolerance_class: 'standard_iso2768_m', inspection_method: 'visual_ndt', output_format: 'analysis_report' }
      },
      {
        id: 'mech_3d_print',
        title: '🖨️ 3D Printing Design-for-Manufacturing',
        description: 'Additive manufacturing design rules, support strategy, and post-processing workflow.',
        badge: '3D Printing',
        presetAnswers: { design_task: 'design_for_manufacturing', material_type: 'pla_petg_polymer', manufacturing_method: 'fdm_3d_printing', tolerance_class: 'general_iso2768_c', inspection_method: 'functional_test', output_format: 'dfm_checklist' }
      }
    ],
    fields: [
      {
        id: 'design_task',
        label: 'What mechanical engineering task are you working on?',
        technicalTerm: 'Mechanical Engineering Deliverable Type',
        eli5: 'Are you designing a part, planning manufacturing, running stress analysis, or doing a design review?',
        example: 'CNC machining process planning for a precision housing component',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the engineering methodology and deliverable template.',
        options: [
          { label: 'Manufacturing Process Planning (CNC, injection molding, sheet metal sequence)', value: 'manufacturing_process', isDefault: true },
          { label: 'Stress / FEA Analysis Brief (Boundary conditions, load cases, safety factors)', value: 'stress_analysis' },
          { label: 'Design for Manufacturing (DFM) Review (Optimize geometry for production)', value: 'design_for_manufacturing' },
          { label: 'Material Selection Decision Matrix (Compare alloys, polymers, composites)', value: 'material_selection' },
          { label: 'Tolerance & GD&T Specification (Functional dimensioning and tolerancing)', value: 'tolerance_gdt' }
        ]
      },
      {
        id: 'material_type',
        label: 'What material family is being used?',
        technicalTerm: 'Material Specification & Properties',
        eli5: 'Aluminum for lightweight, steel for strength, polymer for 3D printing.',
        example: 'Aluminum 6061-T6 (lightweight, corrosion resistant, good machinability)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Loads material properties, machinability data, and design limits.',
        options: [
          { label: 'Aluminum 6061-T6 / 7075-T6 (Lightweight, corrosion resistant, machinable)', value: 'aluminum_6061', isDefault: true },
          { label: 'Structural Steel (A36, 1018, 4140 — high strength, weldable)', value: 'steel_structural' },
          { label: 'Stainless Steel (304, 316L — corrosion resistant, food/medical grade)', value: 'stainless_steel' },
          { label: 'PLA / PETG / Nylon Polymer (3D printing, injection molding)', value: 'pla_petg_polymer' },
          { label: 'Titanium (Ti-6Al-4V — aerospace, medical implants, high cost)', value: 'titanium' }
        ]
      },
      {
        id: 'manufacturing_method',
        label: 'What manufacturing process will be used?',
        technicalTerm: 'Manufacturing Process Selection',
        eli5: 'CNC for precision metal parts; 3D printing for prototypes; injection molding for mass production.',
        example: '3-axis CNC milling with 5-axis finishing passes',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Configures process-specific design rules and constraints.',
        options: [
          { label: 'CNC Milling / Turning (Subtractive machining, tight tolerances)', value: 'cnc_milling', isDefault: true },
          { label: 'FDM / SLA 3D Printing (Additive manufacturing, prototyping)', value: 'fdm_3d_printing' },
          { label: 'Injection Molding (High-volume polymer production)', value: 'injection_molding' },
          { label: 'Sheet Metal Fabrication (Bending, punching, laser cutting)', value: 'sheet_metal' },
          { label: 'Welded Fabrication (Structural frames, pressure vessels)', value: 'welded_fabrication' }
        ]
      },
      {
        id: 'tolerance_class',
        label: 'What tolerance class is required?',
        technicalTerm: 'Dimensional Tolerance Specification',
        eli5: 'Precision parts need tighter tolerances (more expensive); general parts use standard tolerances.',
        example: 'Precision H7 fits for bearing bores (±0.01mm)',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Sets the dimensional accuracy requirements and inspection criteria.',
        options: [
          { label: 'General Purpose — ISO 2768-m (±0.1mm for <30mm dimensions)', value: 'standard_iso2768_m', isDefault: true },
          { label: 'Precision Fit — H7/h6 (±0.01mm, bearing bores, shaft fits)', value: 'precision_h7' },
          { label: 'Coarse / 3D Print — ISO 2768-c (±0.5mm, prototyping tolerance)', value: 'general_iso2768_c' }
        ]
      },
      {
        id: 'inspection_method',
        label: 'How will quality be inspected?',
        technicalTerm: 'Quality Inspection & Metrology',
        eli5: 'CMM for precision measurement; visual + NDT for welds; functional test for prototypes.',
        example: 'CMM (Coordinate Measuring Machine) dimensional inspection',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds inspection plan and acceptance criteria to the deliverable.',
        options: [
          { label: 'CMM Dimensional Inspection (Coordinate measuring machine, GD&T verification)', value: 'cmm_dimensional', isDefault: true },
          { label: 'Visual + NDT (Non-destructive testing: dye penetrant, ultrasonic, X-ray)', value: 'visual_ndt' },
          { label: 'Functional / Fit Test (Assembly verification, go/no-go gauges)', value: 'functional_test' }
        ]
      },
      {
        id: 'output_format',
        label: 'What deliverable format is needed?',
        technicalTerm: 'Engineering Deliverable Type',
        eli5: 'A process sheet, an analysis report, or a DFM checklist?',
        example: 'CNC process sheet with operation sequence and tooling list',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the engineering deliverable.',
        options: [
          { label: 'Manufacturing Process Sheet (Operation sequence, tooling, speeds/feeds)', value: 'process_sheet', isDefault: true },
          { label: 'Analysis Report (FEA setup, results, safety factor summary)', value: 'analysis_report' },
          { label: 'DFM Checklist (Design optimization recommendations for production)', value: 'dfm_checklist' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'civil_structural_review', title: 'Structural Design Review', description: 'Coordinate mechanical with structural analysis.' }
    ],
    verificationChecks: [
      { id: 'vc_safety_factor', title: 'Safety Factor Verification', description: 'Ensure design safety factors meet code requirements (typically FoS ≥ 2.0 for general, ≥ 4.0 for lifting).', category: 'standards' },
      { id: 'vc_material', title: 'Material Certification', description: 'Verify material properties reference certified mill test reports, not assumed handbook values.', category: 'assumptions' }
    ]
  },

  // 13. ENVIRONMENTAL SCIENCE & SUSTAINABILITY
  {
    id: 'environmental_sustainability',
    title: 'Environmental Science & Sustainability Assessment',
    domainId: 'environment_sustainability',
    domainName: 'Environmental science, climate and sustainability',
    group: 'Health, food & living things',
    discipline: 'Environmental Assessment & ESG Reporting',
    summary: 'Conduct carbon footprint assessments, environmental impact analyses, ESG reports, or sustainability strategy frameworks.',
    outcome: 'A structured environmental assessment with quantified impacts, reporting framework alignment, and actionable mitigation strategies.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Environmental Assessment & Sustainability Report',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ['sustainability', 'ESG', 'carbon footprint', 'environmental impact', 'climate', 'renewable', 'greenhouse gas', 'circular economy', 'green', 'net zero'],
    governingStandards: ['GHG Protocol', 'GRI Standards', 'TCFD Recommendations', 'ISO 14001'],
    reviewerRole: 'Environmental Scientist / ESG Analyst',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['assessment_type', 'scope_boundary'],
      fallbackGuidance: 'If emission data is unavailable, prompt generates a data collection framework and estimation methodology.'
    },
    recipes: [
      {
        id: 'env_carbon_footprint',
        title: '🌍 Corporate Carbon Footprint Assessment',
        description: 'GHG Protocol Scope 1+2+3 carbon inventory with reduction pathway and SBTi alignment.',
        badge: 'Carbon Footprint',
        presetAnswers: { assessment_type: 'carbon_footprint', scope_boundary: 'scope_1_2_3', reporting_framework: 'ghg_protocol', industry_sector: 'technology_services', mitigation_strategy: 'science_based_targets', output_format: 'assessment_report' }
      },
      {
        id: 'env_esg_report',
        title: '📊 ESG Disclosure Report (GRI Standards)',
        description: 'Annual ESG report aligned with GRI Universal Standards for stakeholder transparency.',
        badge: 'ESG Reporting',
        presetAnswers: { assessment_type: 'esg_disclosure', scope_boundary: 'organization_wide', reporting_framework: 'gri_standards', industry_sector: 'manufacturing_industrial', mitigation_strategy: 'circular_economy', output_format: 'disclosure_report' }
      },
      {
        id: 'env_renewable_feasibility',
        title: '☀️ Renewable Energy Transition Feasibility',
        description: 'Site-level renewable energy feasibility with solar/wind resource assessment and financial payback.',
        badge: 'Renewable Energy',
        presetAnswers: { assessment_type: 'renewable_feasibility', scope_boundary: 'site_level', reporting_framework: 'tcfd_climate', industry_sector: 'real_estate_facilities', mitigation_strategy: 'renewable_transition', output_format: 'feasibility_study' }
      }
    ],
    fields: [
      {
        id: 'assessment_type',
        label: 'What type of environmental assessment do you need?',
        technicalTerm: 'Environmental Assessment Category',
        eli5: 'A carbon footprint calculation, an ESG report, or a renewable energy feasibility study?',
        example: 'Corporate carbon footprint inventory following GHG Protocol',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the assessment methodology and deliverable structure.',
        options: [
          { label: 'Carbon Footprint Assessment (GHG inventory, Scope 1/2/3 emissions)', value: 'carbon_footprint', isDefault: true },
          { label: 'ESG Disclosure Report (Environmental, Social, Governance performance)', value: 'esg_disclosure' },
          { label: 'Renewable Energy Feasibility (Solar/wind resource, payback analysis)', value: 'renewable_feasibility' },
          { label: 'Environmental Impact Assessment (EIA for construction/development projects)', value: 'eia_project' },
          { label: 'Circular Economy Strategy (Waste reduction, recycling, product lifecycle)', value: 'circular_economy_strategy' }
        ]
      },
      {
        id: 'scope_boundary',
        label: 'What is the assessment boundary?',
        technicalTerm: 'Organizational & Operational Boundary',
        eli5: 'The entire organization, a single facility, or just direct operations?',
        example: 'Organization-wide Scope 1 + 2 + 3 (full value chain)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Defines the boundary for data collection and reporting.',
        options: [
          { label: 'Scope 1 + 2 + 3 (Full value chain: direct + energy + upstream/downstream)', value: 'scope_1_2_3', isDefault: true },
          { label: 'Organization-Wide (All facilities, operations, and owned vehicles)', value: 'organization_wide' },
          { label: 'Single Site / Facility (One building, factory, or campus)', value: 'site_level' },
          { label: 'Product Lifecycle (Cradle-to-grave for a specific product or service)', value: 'product_lifecycle' }
        ]
      },
      {
        id: 'reporting_framework',
        label: 'Which reporting framework should be followed?',
        technicalTerm: 'Sustainability Reporting Standard',
        eli5: 'GHG Protocol for carbon; GRI for full ESG; TCFD for climate financial risks.',
        example: 'GHG Protocol Corporate Standard for emissions inventory',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Aligns metrics, disclosures, and sections to the chosen framework.',
        options: [
          { label: 'GHG Protocol Corporate Standard (Greenhouse gas accounting and reporting)', value: 'ghg_protocol', isDefault: true },
          { label: 'GRI Universal Standards 2021 (Comprehensive sustainability reporting)', value: 'gri_standards' },
          { label: 'TCFD Recommendations (Climate-related financial risk disclosure)', value: 'tcfd_climate' },
          { label: 'ISO 14001 Environmental Management System', value: 'iso_14001' }
        ]
      },
      {
        id: 'industry_sector',
        label: 'What industry sector is being assessed?',
        technicalTerm: 'Industry Sector & Emission Profile',
        eli5: 'Different industries have very different carbon profiles and material risks.',
        example: 'Technology & cloud services (Scope 2 electricity-dominant)',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Loads sector-specific emission factors and material topics.',
        options: [
          { label: 'Technology & Cloud Services (Scope 2 electricity, data center PUE, e-waste)', value: 'technology_services', isDefault: true },
          { label: 'Manufacturing & Industrial (Scope 1 combustion, process emissions, waste)', value: 'manufacturing_industrial' },
          { label: 'Real Estate & Facilities (Building energy, HVAC, green building certifications)', value: 'real_estate_facilities' },
          { label: 'Transportation & Logistics (Fleet fuel, shipping, last-mile delivery)', value: 'transport_logistics' },
          { label: 'Agriculture & Food Processing (Land use, methane, water consumption)', value: 'agriculture_food' }
        ]
      },
      {
        id: 'mitigation_strategy',
        label: 'What mitigation or reduction strategy should be explored?',
        technicalTerm: 'Decarbonization & Mitigation Pathway',
        eli5: 'Science-based targets, renewable energy transition, or circular economy approaches?',
        example: 'Science-Based Targets initiative (SBTi) 1.5°C aligned reduction pathway',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds reduction targets and implementation roadmap sections.',
        options: [
          { label: 'Science-Based Targets (SBTi 1.5°C pathway with interim milestones)', value: 'science_based_targets', isDefault: true },
          { label: 'Renewable Energy Transition (PPA, on-site solar, green tariffs, RECs)', value: 'renewable_transition' },
          { label: 'Circular Economy (Waste hierarchy, recycled content, product take-back)', value: 'circular_economy' },
          { label: 'Carbon Offsetting & Removal (Verified offset projects, CDR technologies)', value: 'carbon_offsets' }
        ]
      },
      {
        id: 'output_format',
        label: 'What format should the deliverable take?',
        technicalTerm: 'Environmental Report Format',
        eli5: 'A full assessment report, a disclosure summary, or a feasibility study?',
        example: 'Full GHG assessment report with data tables and reduction roadmap',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the output sections and data presentation.',
        options: [
          { label: 'Assessment Report (Methodology, data tables, findings, reduction roadmap)', value: 'assessment_report', isDefault: true },
          { label: 'ESG Disclosure Report (Framework-aligned sections for annual report)', value: 'disclosure_report' },
          { label: 'Feasibility Study (Resource assessment, financial payback, implementation plan)', value: 'feasibility_study' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'finance_equity_valuation', title: 'ESG-Integrated Valuation', description: 'Factor ESG risks into investment analysis.' }
    ],
    verificationChecks: [
      { id: 'vc_emission_factors', title: 'Emission Factor Sources', description: 'Verify emission factors reference recognized databases (DEFRA, EPA, ecoinvent) with publication year.', category: 'standards' },
      { id: 'vc_greenwashing', title: 'Greenwashing Guard', description: 'Ensure claims are specific, quantified, and verifiable — avoid vague "green" language.', category: 'limitations' }
    ]
  },

  // 14. TRAVEL PLANNING & CULTURAL GUIDE
  {
    id: 'travel_planning_guide',
    title: 'Travel Planning & Cultural Itinerary Builder',
    domainId: 'travel_places',
    domainName: 'Travel, culture and expatriate life',
    group: 'Personal life & situations',
    discipline: 'Travel Planning & Cultural Tourism',
    summary: 'Build day-by-day travel itineraries, packing lists, budget breakdowns, local etiquette guides, and transportation logistics.',
    outcome: 'A ready-to-use travel plan with daily schedules, cost estimates, cultural tips, and logistical details.',
    skillLevel: 'Beginner',
    riskClass: 'R0',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Travel Itinerary & Cultural Guide',
    modality: 'plan',
    primaryIntent: 'Plan / schedule',
    aliases: ['travel', 'itinerary', 'vacation', 'trip', 'tourism', 'backpacking', 'holiday', 'packing list', 'budget travel', 'digital nomad', 'cultural guide'],
    governingStandards: ['UNESCO World Heritage Sites', 'CDC Travel Health Guidelines'],
    reviewerRole: 'Experienced Travel Planner / Cultural Guide',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['destination_region', 'trip_duration'],
      fallbackGuidance: 'If destination is undecided, prompt generates a destination comparison matrix based on interests and budget.'
    },
    recipes: [
      {
        id: 'travel_japan_cultural',
        title: '🇯🇵 10-Day Japan Cultural Immersion',
        description: 'Tokyo → Kyoto → Osaka with temple visits, food experiences, and rail pass logistics.',
        badge: 'Japan',
        presetAnswers: { destination_region: 'japan_east_asia', trip_duration: 'extended_10_14', travel_style: 'cultural_immersion', budget_tier: 'mid_range', accommodation_pref: 'mix_ryokan_hotel', dietary_needs: 'no_restrictions' }
      },
      {
        id: 'travel_europe_backpack',
        title: '🇪🇺 3-Week Budget Europe Backpacking',
        description: 'Multi-city route through Western/Central Europe with hostel stays and rail passes.',
        badge: 'Europe',
        presetAnswers: { destination_region: 'western_europe', trip_duration: 'extended_10_14', travel_style: 'backpacker_adventure', budget_tier: 'budget', accommodation_pref: 'hostels_budget', dietary_needs: 'no_restrictions' }
      },
      {
        id: 'travel_nomad_sea',
        title: '🌴 Digital Nomad Southeast Asia',
        description: 'Bali → Chiang Mai → Ho Chi Minh with co-working spaces, visa logistics, and local SIM cards.',
        badge: 'Digital Nomad',
        presetAnswers: { destination_region: 'southeast_asia', trip_duration: 'extended_10_14', travel_style: 'digital_nomad', budget_tier: 'budget', accommodation_pref: 'serviced_apartment', dietary_needs: 'no_restrictions' }
      }
    ],
    fields: [
      {
        id: 'destination_region',
        label: 'Where are you traveling to?',
        technicalTerm: 'Destination Region & Geography',
        eli5: 'Pick a region or country group for your trip.',
        example: 'Japan (Tokyo, Kyoto, Osaka cultural circuit)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Loads region-specific logistics, visa info, cultural norms, and seasonal advice.',
        options: [
          { label: 'Japan & East Asia (Japan, South Korea, Taiwan)', value: 'japan_east_asia', isDefault: true },
          { label: 'Southeast Asia (Thailand, Vietnam, Bali, Philippines)', value: 'southeast_asia' },
          { label: 'Western Europe (France, Italy, Spain, Germany, UK)', value: 'western_europe' },
          { label: 'North America (USA road trips, Canada, Mexico)', value: 'north_america' },
          { label: 'South Asia (India, Sri Lanka, Nepal)', value: 'south_asia' },
          { label: 'South America (Peru, Colombia, Argentina, Brazil)', value: 'south_america' }
        ]
      },
      {
        id: 'trip_duration',
        label: 'How long is your trip?',
        technicalTerm: 'Trip Duration & Pacing Strategy',
        eli5: 'Shorter trips need tighter scheduling; longer trips allow deeper exploration.',
        example: '10-14 days (comprehensive cultural itinerary)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Calibrates the daily schedule density and city count.',
        options: [
          { label: 'Long Weekend (3-5 days, single city or region focus)', value: 'weekend_3_5', isDefault: true },
          { label: 'One Week (7 days, 2-3 cities with day trips)', value: 'one_week_7' },
          { label: 'Extended Trip (10-14 days, multi-city circuit)', value: 'extended_10_14' },
          { label: 'Month+ Slow Travel (Deep immersion, remote work friendly)', value: 'month_slow' }
        ]
      },
      {
        id: 'travel_style',
        label: 'What is your travel style?',
        technicalTerm: 'Travel Persona & Experience Preference',
        eli5: 'Cultural deep-dives, adventure activities, luxury relaxation, or digital nomad work-travel?',
        example: 'Cultural immersion: temples, food markets, local experiences',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Shapes activity recommendations, accommodation choices, and daily pacing.',
        options: [
          { label: 'Cultural Immersion (Temples, museums, food tours, local experiences)', value: 'cultural_immersion', isDefault: true },
          { label: 'Backpacker Adventure (Budget travel, hostels, off-beaten-path, hiking)', value: 'backpacker_adventure' },
          { label: 'Digital Nomad (Co-working, reliable Wi-Fi, monthly stays, visa logistics)', value: 'digital_nomad' },
          { label: 'Luxury & Relaxation (5-star hotels, spa, fine dining, exclusive experiences)', value: 'luxury_relaxation' },
          { label: 'Family Travel (Kid-friendly activities, safe neighborhoods, stroller-accessible)', value: 'family_travel' }
        ]
      },
      {
        id: 'budget_tier',
        label: 'What is your daily budget range?',
        technicalTerm: 'Travel Budget & Spending Tier',
        eli5: 'Budget travelers save on accommodation and eat local; luxury travelers want premium experiences.',
        example: 'Mid-Range: $100-200/day (comfortable hotels, good restaurants, paid attractions)',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Filters accommodation, dining, and activity recommendations by price range.',
        options: [
          { label: 'Budget ($30-80/day: hostels, street food, public transport)', value: 'budget', isDefault: true },
          { label: 'Mid-Range ($80-200/day: 3-4 star hotels, restaurants, some taxis)', value: 'mid_range' },
          { label: 'Luxury ($200+/day: 5-star hotels, private tours, fine dining)', value: 'luxury' }
        ]
      },
      {
        id: 'accommodation_pref',
        label: 'What type of accommodation do you prefer?',
        technicalTerm: 'Accommodation Type & Booking Strategy',
        eli5: 'Hotels, hostels, Airbnb apartments, or traditional local stays (ryokan, riad)?',
        example: 'Mix of traditional ryokan and modern hotels',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Recommends specific accommodation types and booking platforms.',
        options: [
          { label: 'Mix of Hotel & Local Traditional (Ryokan, riad, boutique + standard hotel)', value: 'mix_ryokan_hotel', isDefault: true },
          { label: 'Hostels & Budget Stays (Dorms, guesthouses, capsule hotels)', value: 'hostels_budget' },
          { label: 'Serviced Apartment / Airbnb (Kitchen, laundry, monthly discount)', value: 'serviced_apartment' },
          { label: 'Luxury Hotels & Resorts (5-star, spa, concierge service)', value: 'luxury_hotels' }
        ]
      },
      {
        id: 'dietary_needs',
        label: 'Any dietary restrictions or food preferences?',
        technicalTerm: 'Dietary Requirements & Food Safety',
        eli5: 'Vegetarian, halal, allergies, or no restrictions?',
        example: 'No restrictions — eager to try all local cuisine',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Customizes restaurant recommendations and food safety tips.',
        options: [
          { label: 'No Restrictions (Open to all local cuisine and street food)', value: 'no_restrictions', isDefault: true },
          { label: 'Vegetarian / Vegan (Plant-based dining options)', value: 'vegetarian_vegan' },
          { label: 'Halal / Kosher (Religious dietary compliance)', value: 'halal_kosher' },
          { label: 'Gluten-Free / Food Allergies (Allergy-safe dining guidance)', value: 'gluten_free_allergy' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'universal_builder', title: 'General Planning', description: 'Create broader planning documents for events or trips.' }
    ],
    verificationChecks: [
      { id: 'vc_visa', title: 'Visa & Entry Requirements', description: 'Remind to verify current visa requirements with official embassy/government sources.', category: 'standards' },
      { id: 'vc_safety', title: 'Travel Safety Advisory', description: 'Include note to check government travel advisories (e.g., US State Dept, UK FCDO) before booking.', category: 'limitations' }
    ]
  },

  // 15. UI/UX DESIGN
  {
    id: 'uiux_design_system',
    title: 'UI/UX Design & User Experience Strategy',
    domainId: 'arts_design_media',
    domainName: 'Visual arts, design and architecture',
    group: 'Society, law & culture',
    discipline: 'Product Design & Human-Computer Interaction',
    summary: 'Design user interfaces, create design system specifications, plan user research, or optimize conversion flows with UX best practices.',
    outcome: 'A structured design brief with user flows, wireframe specifications, accessibility requirements, and interaction patterns.',
    skillLevel: 'Practitioner',
    riskClass: 'R0',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'UX Design Brief & Interface Specification',
    modality: 'diagram',
    primaryIntent: 'Create / design',
    aliases: ['UI', 'UX', 'user interface', 'user experience', 'design system', 'wireframe', 'prototype', 'Figma', 'accessibility', 'usability', 'interaction design', 'information architecture'],
    governingStandards: ['WCAG 2.2 AA', 'Material Design 3', 'Apple HIG', 'Nielsen Norman Heuristics'],
    reviewerRole: 'Senior Product Designer / UX Lead',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['design_task', 'platform_target'],
      fallbackGuidance: 'If user research data is unavailable, prompt generates a lightweight user interview guide.'
    },
    recipes: [
      {
        id: 'ux_mobile_onboarding',
        title: '📱 Mobile App Onboarding Flow',
        description: 'First-time user experience with progressive disclosure, tutorial walkthrough, and activation metrics.',
        badge: 'Mobile UX',
        presetAnswers: { design_task: 'user_flow', platform_target: 'mobile_native', design_system: 'material_design_3', accessibility_standard: 'wcag_aa', user_research_method: 'usability_testing', output_format: 'flow_wireframe' }
      },
      {
        id: 'ux_saas_dashboard',
        title: '📊 SaaS Analytics Dashboard Redesign',
        description: 'Data-heavy dashboard with information hierarchy, filter patterns, and data visualization best practices.',
        badge: 'Dashboard Design',
        presetAnswers: { design_task: 'interface_redesign', platform_target: 'web_responsive', design_system: 'custom_design_system', accessibility_standard: 'wcag_aa', user_research_method: 'heuristic_audit', output_format: 'design_spec' }
      },
      {
        id: 'ux_checkout_optimization',
        title: '🛒 E-Commerce Checkout Conversion Optimization',
        description: 'Reduce cart abandonment with streamlined checkout flow, trust signals, and progressive form design.',
        badge: 'Conversion UX',
        presetAnswers: { design_task: 'conversion_optimization', platform_target: 'web_responsive', design_system: 'material_design_3', accessibility_standard: 'wcag_aa', user_research_method: 'analytics_heatmaps', output_format: 'audit_recommendations' }
      }
    ],
    fields: [
      {
        id: 'design_task',
        label: 'What type of UX/UI work are you doing?',
        technicalTerm: 'Design Deliverable Type',
        eli5: 'Are you designing a new user flow, redesigning an existing interface, or running a UX audit?',
        example: 'Design a new user onboarding flow for a mobile app',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Selects the design methodology and deliverable template.',
        options: [
          { label: 'User Flow / Journey Map (Screen-by-screen flow with decision points)', value: 'user_flow', isDefault: true },
          { label: 'Interface Redesign (Improve existing screens with UX best practices)', value: 'interface_redesign' },
          { label: 'Conversion Optimization (Reduce drop-off, improve funnel completion)', value: 'conversion_optimization' },
          { label: 'Design System / Component Library (Tokens, components, patterns)', value: 'design_system_spec' },
          { label: 'User Research Plan (Interview guides, usability test scripts, surveys)', value: 'research_plan' }
        ]
      },
      {
        id: 'platform_target',
        label: 'What platform is this for?',
        technicalTerm: 'Target Platform & Device Context',
        eli5: 'Mobile app (iOS/Android), responsive web, or desktop application?',
        example: 'Mobile native app (iOS and Android)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Applies platform-specific design patterns and interaction conventions.',
        options: [
          { label: 'Mobile Native App (iOS / Android, touch gestures, bottom navigation)', value: 'mobile_native', isDefault: true },
          { label: 'Responsive Web (Desktop + tablet + mobile, breakpoints)', value: 'web_responsive' },
          { label: 'Desktop SaaS Application (Complex workflows, keyboard shortcuts, data density)', value: 'desktop_saas' }
        ]
      },
      {
        id: 'design_system',
        label: 'Which design system or framework applies?',
        technicalTerm: 'Design System & Visual Language',
        eli5: 'Material Design for Android/cross-platform; Apple HIG for iOS; custom for brand-specific.',
        example: 'Material Design 3 (Google, cross-platform, adaptive)',
        type: 'select', step: 'start', required: true,
        promptImpact: 'Loads component naming conventions, spacing scales, and interaction patterns.',
        options: [
          { label: 'Material Design 3 (Google, cross-platform, dynamic color)', value: 'material_design_3', isDefault: true },
          { label: 'Apple Human Interface Guidelines (iOS native, SF Symbols)', value: 'apple_hig' },
          { label: 'Custom Design System (Brand-specific tokens, components, and patterns)', value: 'custom_design_system' }
        ]
      },
      {
        id: 'accessibility_standard',
        label: 'What accessibility standard must be met?',
        technicalTerm: 'Accessibility Compliance Level',
        eli5: 'WCAG AA is the standard for most websites; AAA is stricter for government or healthcare.',
        example: 'WCAG 2.2 Level AA (standard for commercial websites)',
        type: 'select', step: 'fit', required: true,
        promptImpact: 'Adds accessibility requirements, color contrast ratios, and ARIA landmark specifications.',
        options: [
          { label: 'WCAG 2.2 Level AA (Standard commercial web accessibility)', value: 'wcag_aa', isDefault: true },
          { label: 'WCAG 2.2 Level AAA (Enhanced, government/healthcare)', value: 'wcag_aaa' },
          { label: 'Basic Accessibility (Color contrast, keyboard navigation, screen reader labels)', value: 'basic_a11y' }
        ]
      },
      {
        id: 'user_research_method',
        label: 'What user research method should inform the design?',
        technicalTerm: 'UX Research Methodology',
        eli5: 'Usability testing with real users, analytics and heatmaps, or expert heuristic evaluation?',
        example: 'Moderated usability testing with 5 participants (think-aloud protocol)',
        type: 'select', step: 'fit', required: false,
        promptImpact: 'Adds research methodology sections and findings integration.',
        options: [
          { label: 'Usability Testing (5 participants, think-aloud, task completion rate)', value: 'usability_testing', isDefault: true },
          { label: 'Heuristic Evaluation (Expert audit using Nielsen 10 heuristics)', value: 'heuristic_audit' },
          { label: 'Analytics & Heatmaps (Quantitative: Hotjar, FullStory, funnel analysis)', value: 'analytics_heatmaps' },
          { label: 'User Interviews (Qualitative discovery, pain points, mental models)', value: 'user_interviews' }
        ]
      },
      {
        id: 'output_format',
        label: 'What deliverable format is needed?',
        technicalTerm: 'Design Deliverable Format',
        eli5: 'A user flow diagram, a detailed design spec, or an audit with recommendations?',
        example: 'Screen-by-screen flow diagram with annotated wireframes',
        type: 'select', step: 'finetune', required: false,
        promptImpact: 'Structures the design deliverable sections.',
        options: [
          { label: 'User Flow + Wireframe Annotations (Screen-by-screen with decision points)', value: 'flow_wireframe', isDefault: true },
          { label: 'Design Specification Document (Component specs, interaction states, copy)', value: 'design_spec' },
          { label: 'UX Audit & Recommendations (Finding + severity + recommendation format)', value: 'audit_recommendations' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'creative_product_photography', title: 'Product Photography', description: 'Create visual assets for the designed interfaces.' }
    ],
    verificationChecks: [
      { id: 'vc_a11y', title: 'Accessibility Compliance', description: 'Verify all interactive elements have proper ARIA labels, focus states, and color contrast ratios.', category: 'standards' },
      { id: 'vc_consistency', title: 'Design System Consistency', description: 'Ensure all components follow the specified design system tokens and patterns.', category: 'evidence' }
    ]
  }

];
